/* eslint-disable react/prop-types */
import "../pages/CartModel.css";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";

function CartModel({ isOpen, onClose }) {
  const { items, removeFromCart } = useContext(CartContext);

  const cartItems = items ? items.filter((item) => item && item.inCart) : [];

  const total = cartItems.reduce((acc, item) => {
    if (!item || !item.price) return acc;
    const price = parseFloat(item.price.replace("£", ""));
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className={`cart-modal ${isOpen ? "open" : ""}`}>
      <div className="cart-modal-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2 className="basket-title">Basket</h2>

        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            index={index}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
        <h3 className="total-price">Total: £{total.toFixed(2)}</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default CartModel;
