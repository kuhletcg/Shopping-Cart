import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>No items selected</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="column">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x R{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="column">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">R{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="column">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">R{taxPrice.toFixed(2)}</div>
            </div>
            <div className="column">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                R{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="column">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>R{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="column">
              <button onClick={() => alert('Implement Checkout!')}>
                CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}