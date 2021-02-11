import React from 'react';

export default function Header(props) {
  return (
    <header className="block column center">
      <div>
        <a href="#/">
          <h1>SHOPPING CART</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          CART{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/kuhle@gmail.com "> kuhle@gmail.com</a>
      </div>
    </header>
  );
}
