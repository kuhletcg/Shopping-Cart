import React from 'react';
import Basket from './Basket';

export default function Basket(props) {
    const { cartItems, onAdd } = props;
    return (

        <aside className="block col-1">

        <h2>Cart Items</h2>
<div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
{cartItems.map((items) => (

))}
        </aside>
);
}
