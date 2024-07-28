import React from "react"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null ) return <Shimmer />

    const {name, costForTwoMessage, cuisines} = resInfo?.cards?.[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

    if(!itemCards?.length) console.error("No CARDS HERE")

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {
                    cuisines?.map((item)=>{
                        return (
                            <li key={item}>{item}</li>
                        )
                    })
                }
            </ul>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((cardItem)=>{
                        return (
                            <li key={cardItem?.card?.info?.id}>
                                {cardItem?.card?.info?.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu