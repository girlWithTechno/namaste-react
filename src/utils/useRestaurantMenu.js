import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () => {
        try{
            const response = await fetch(`${MENU_URL}${resId}`);
            const data = await response.json();

            setResInfo(data?.data)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchMenu();
    },[]);

    return resInfo;
}

export default useRestaurantMenu;