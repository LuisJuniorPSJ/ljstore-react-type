import "./Cart.css";

interface CartProps {
  cart: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
  closeCart: () => void;
  removeFromCart: (id: number) => void;
}

import React from "react";

interface CartProps {
  closeCart: () => void;
  removeFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, closeCart, removeFromCart }) => {
  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <h1>Seu Carrinho</h1>
        {cart.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <div className="cart-content">
                <li key={`${item.id}_${index}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="50"
                    height="50"
                  />{" "}
                  {item.name} - R$ {item.price.toFixed(2)}
                  <button onClick={() => removeFromCart(item.id)}>
                    Remover
                  </button>
                </li>
              </div>
            ))}
          </ul>
        )}
        <button onClick={closeCart}>Fechar Carrinho</button>
      </div>
    </div>
  );
};

export default Cart;
