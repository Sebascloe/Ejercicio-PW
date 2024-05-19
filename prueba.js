import React, { useState } from 'react';

const CartItem = ({ name, price, quantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (e) => {
    setItemQuantity(e.target.value);
  };

  return (
    <div className="cart-item">
      <div className="product-image"></div>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <div className="quantity-selector">
        <input type="number" value={itemQuantity} onChange={handleQuantityChange} />
      </div>
      <div className="subtotal-price">${(price * itemQuantity).toFixed(2)}</div>
      <button className="remove-item">Eliminar</button>
      <button className="save-for-later">Guardar para después</button>
    </div>
  );
};

const Waza = () => {
  const cartItems = [
    { name: "Voltron Mini Action Voltron Vehicle Force Figure (Standard)", price: 65.99, quantity: 1 },
    { name: "Star Wars Collection: Darth Vader White (Special Christmas 2024 Disney Edition)", price: 65.99, quantity: 2 }
  ];

  return (
    <div className="shopping-cart">
      {cartItems.map((item, index) => (
        <CartItem key={index} name={item.name} price={item.price} quantity={item.quantity} />
      ))}
    </div>
  );
};

export default Waza;

