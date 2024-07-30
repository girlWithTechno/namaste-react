import React from "react"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = React.useState(0)

    if(resInfo === null ) return <Shimmer />

    const {name, costForTwoMessage, cuisines} = resInfo?.cards?.[2]?.card?.card?.info;
    const filteredData = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item)=> item?.card?.card['@type']?.includes('ItemCategory'))

    return (
        <div className="m-4 text-center">
            <h1 className="font-semibold my-2 text-2xl">{name}</h1>
            <p className="font-medium">{cuisines.join(', ')} - {costForTwoMessage}</p>
            {
                filteredData?.map((cat, index)=>{
                    return (
                        <RestaurantCategory 
                            data={cat?.card?.card} 
                            index={index}
                            key={cat?.card?.card?.title}
                            showItems={index === showIndex}
                            selectedIndex={showIndex}
                            setShowIndex={setShowIndex}
                        />
                    )
                })
            }
        </div>
    )
}

export default RestaurantMenu