import React from 'react';
import CartItem from './CartItem.js'

export default function Cartlist({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value}></CartItem>
            })}
        </div>
    )
}
