import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import CartItem from "../components/CartItem"

function Cart() {
    const [textForButton, setTextForButton] = useState('Place Order')
    const {cartItems,emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key = {item.id} item = {item}/>
    ))
    const total = 5.99 * cartItems.length;
   const totalCostDisplay =  total.toLocaleString("en-US", {style: "currency", currency: "USD"})
   
   function placeOrder(){
    setTextForButton('Ordering...')
       setTimeout(() =>{
            console.log("Order placed!")
            setTextForButton('Order Placed!')
            emptyCart()

       }, 3000)
   }
   return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            <div className="order-button">
               {
                   cartItems.length > 0 ?
                    <button onClick = {placeOrder}>{textForButton}</button>
                    :  <p>You have no items in your cart.</p>
                } 
            </div>
        </main>
    )
}

export default Cart