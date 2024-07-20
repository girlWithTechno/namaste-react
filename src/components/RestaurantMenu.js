import React, { useEffect, useState } from "react"

const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try{
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=594820&catalog_qa=undefined&submitAction=ENTER");
            const data = await response.json();

            setRestaurantMenu(data)
            console.log("data here", data)
        }catch(error){
            console.error(error)
        }
    }
console.log('show me restaurant',restaurantMenu)
    return (
        <div className="menu">
            <h1>Restaurant Name</h1>
            <h2>Menu</h2>
            <ul>
                <li>Burgers</li>
                <li>Biryani</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu