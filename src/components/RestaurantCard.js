import React from "react";
import { RESTAURANT_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantItem} = props;
    const {cloudinaryImageId, cuisines, name, avgRatingString, sla} = restaurantItem.info;
    
    return (
        <div className="m-4 border border-solid rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
                className="w-60 h-52 rounded-t-lg"
                src={`${RESTAURANT_URL}${cloudinaryImageId}`}/>
            <div className="p-4 w-52 h-52">
                <h3 className="text-xl font-semibold text-wrap">{name}</h3>
                <h4 className="text-sm">{cuisines.join(', ')}</h4>
                <h4 className="text-base">{`${avgRatingString}🌟`}</h4>
                <h5 className="text-base">{sla?.slaString}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard