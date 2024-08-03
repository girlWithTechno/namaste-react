import React, { useContext, useState } from "react";
import RestaurantCard, {withOpenLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [list, setList] = React.useState([]);
    const [searchText, setSearchText] = React.useState("");
    const [originalList, setOriginalList] = useState([]);

    const networkStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);
    
    const onTopRatedClick = () => {
        const filteredList = list.filter((item)=> item.info.avgRatingString > 4.2);
        setList(filteredList)
    }
    // HOC for opened restaurants
    const OpenedRestaurantCard = withOpenLabel(RestaurantCard);

    React.useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try{
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const data = await response.json();

            setOriginalList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }catch(error){
            console.log("Error", error)
        }
    }

    if(networkStatus === false) return <h1>Looks like you are offline. Please check your internet connection</h1>

    // Conditional Rendering
    return (
        originalList?.length === 0 
            ? <Shimmer /> 
            : (
                <div className="my-5">
                    <div className="flex justify-between items-center mx-4">
                        <div className="m-4">
                            <input 
                                type="text" 
                                data-testid="searchId"
                                placeholder="Search" 
                                className="text-md border border-solid border-black rounded-sm mr-4 w-40 px-2" 
                                value={searchText} 
                                onChange={(e)=>{setSearchText(e.target.value)}}
                            />
                            <button
                                className="bg-green-100 px-2 py-0.5 text-center rounded-md text-md w-24 text-slate-700" 
                                onClick={()=>{
                                //Filter the restaurant cards and update the UI
                                // need search text from input box by binding value to a local STATE variable of React
                                if(searchText){
                                    const filteredList = originalList.filter((item)=> item.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                    setList(filteredList)
                                }else{
                                    setList(originalList)
                                }
                            }}>
                                Search
                            </button>
                        </div>
                        <div>
                                UserName:
                                <input className="border-2 border-black ml-3 px-2" placeholder="Enter name" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                            </div>
                        <button 
                            className="mx-5 font-semibold text-lg rounded-md bg-slate-300 px-5 h-10" 
                            onClick={onTopRatedClick}
                        >
                            Top Rated Restaurants
                        </button>
                    </div>
                    <div className="flex m-4 flex-wrap">
                        {/* Restaurant Card */}
                        {
                            list?.map((restaurant) => (
                                <Link 
                                    key={restaurant.info.id}
                                    to={`restaurants/${restaurant.info.id}`}
                                >
                                    {
                                        restaurant?.info?.isOpen 
                                            ? <OpenedRestaurantCard restaurantItem={restaurant} /> 
                                            : <RestaurantCard restaurantItem={restaurant}/>
                                    }
                                </Link>
                            ))
                        }
                    </div>
                </div>
            )
    )
}

export default Body