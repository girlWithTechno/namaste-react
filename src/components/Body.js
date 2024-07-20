import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";

const Body = () => {
    const [list, setList] = React.useState([]);
    const [searchText, setSearchText] = React.useState("");
    const [originalList, setOriginalList] = useState([]);
    
    const onTopRatedClick = () => {
        const filteredList = list.filter((item)=> item.info.avgRatingString > 4.2);
        setList(filteredList)
    }

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

    // Conditional Rendering
    return (
        originalList?.length === 0 
            ? <Shimmer /> 
            : (
                <div className="body-container">
                    <div className="top-container">
                        <div className="search">
                            <input type="text" placeholder="Search" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                            <button onClick={()=>{
                                //Filter the restaurant cards and update the UI
                                // need search text from input box by binding value to a local STATE variable of React
                                if(searchText){
                                    const filteredList = originalList.filter((item)=> item.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                    setList(filteredList)
                                }else{
                                    setList(originalList)
                                }
                            }}>Search</button>
                        </div>
                        {/* <div className="filter"> */}
                            <button 
                                className="filter-btn" 
                                onClick={onTopRatedClick}
                            >
                                Top Rated Restaurants
                            </button>
                        {/* </div> */}
                    </div>
                    <div className="restaurant-container">
                        {/* Restaurant Card */}
                        {
                            list?.map((restaurant) => (<RestaurantCard key={`${restaurant.info.id}`} restaurantItem={restaurant}/>))
                        }
                    </div>
                </div>
            )
    )
}

export default Body