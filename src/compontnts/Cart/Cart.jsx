import React from 'react';
import './Cart.css'

// direct destructuring {cart} property from Shop
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3>Order Summery</h3><hr />
            <h3>Selected Items: {cart.length}</h3>
        </div>
    );
};

export default Cart;