import React from "react"
import ItemList from "./ItemList"

const RestaurantCategory = (props) => {
    const handleClick = ()=> {
        if(props.showItems){
            props.setShowIndex(null)
        }else{
            props.setShowIndex?.(props.index)
        }
    }

    if(!props.data?.itemCards?.length) return <></>
    return (
        <div className="w-6/12 mx-auto my-4 p-2 bg-gray-50 shadow-lg">
            {/* HEADER */}
            <div className="flex justify-between mx-2 items-center cursor-pointer" onClick={handleClick}>
                <span className="font-semibold">{`${props.data?.title} (${props.data?.itemCards?.length || 0})`}</span>
                <span className="">{true ? '🔽' : '🔼'}</span>
            </div>
            {/* BODY OF ACOORDION */}
            {props.showItems ? <ItemList items={props.data?.itemCards}/> : <></>}
        </div>
    )
}

export default RestaurantCategory