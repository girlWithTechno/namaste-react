import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice';
import ItemList from './ItemList'

function Cart() {
    const dispatch = useDispatch();
    const cartList = useSelector((state)=> state.cart.items)
    
    const clearCartItems = () => {
        dispatch(clearCart())
    }
  return (
    <div className='p-4 m-auto text-center'>
        <div classname="flex justify-between items-center">
            <div className='text-2xl font-bold'>Cart Items</div>
            <button className='p-2 m-2 text-white bg-black rounded-lg' onClick={clearCartItems}>Clear Cart</button>
        </div>
        {cartList?.length === 0 && <h2>Cart empty. Add items to the cart!!</h2>}
      <ItemList items={cartList}/>
    </div>
  )
}

export default Cart
