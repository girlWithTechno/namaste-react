import React from "react";
import { RESTAURANT_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantItem} = props;
    const {cloudinaryImageId, cuisines, name, avgRatingString, sla} = restaurantItem.info;
    
    return (
        <div className="restaurant-card">
            <img 
                className="restaurant-image"
                src={`${RESTAURANT_URL}${cloudinaryImageId}`}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRatingString}</h4>
            <h5>{sla?.slaString}</h5>
        </div>
    )
}

export default RestaurantCard