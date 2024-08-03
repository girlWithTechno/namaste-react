import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { DISH_URL } from '../utils/constants'

const ItemList = ({items}) => {
  const dispatch = useDispatch();

  const onAddClick = (data) => {
    dispatch(addItem(data));
  };

  return (
    <div>
      {
        items?.map((cardItem)=>{
            return (
                <div data-testid={"foodItems"} className="flex text-left p-7 justify-between border-b-2" key={cardItem?.card?.info?.id}>
                    <div className='w-9/12'>
                        { cardItem?.card?.info?.isVeg ? <span>{'✅'}</span> : <span>{'🛑'}</span> }
                        <div className="text-lg font-semibold">{cardItem?.card?.info?.name}</div>
                        <div className="items-start">
                            ₹{(cardItem?.card?.info?.price || cardItem?.card?.info?.defaultPrice)/100}
                        </div>
                        <div>
                            {cardItem?.card?.info?.description}
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute bottom-0 left-7 mt-3'>
                            <button 
                              className='bg-white rounded-xl shadow-lg m-auto px-4 py-1 border-green-600 border-2 text-green-700'
                              onClick={()=>onAddClick(cardItem)}
                            >
                              Add +
                            </button>
                        </div>
                        <img src={`${DISH_URL}${cardItem?.card?.info?.imageId}`} className="w-32 h-32 rounded-lg"/>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default ItemList
