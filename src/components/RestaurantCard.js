import React, { useContext } from "react";
import { RESTAURANT_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const {restaurantItem} = props;
    console.log('show me resaturant item',restaurantItem)
    const {cloudinaryImageId, cuisines, name, avgRatingString, sla} = restaurantItem.info;

    const {loggedInUser} = useContext(UserContext);
    console.log('card context in loggein user',loggedInUser)
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
                <h5 className="text-base">{loggedInUser}</h5>
            </div>
        </div>
    )
}

export const withOpenLabel = (RestaurantCard) => {
    return (data) => {
        console.log("inside data show", data)
        return (
            <div>
                <label className="absolute bg-black text-white px-2 rounded-md mx-2 my-1">Opened</label>
                <RestaurantCard {...data}/>
            </div>
        )
    }
}

export default RestaurantCard