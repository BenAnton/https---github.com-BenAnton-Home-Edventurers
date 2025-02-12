/* eslint-disable react/prop-types */
import "../components/CartItem.css";

function CartItem({ image, title, price, onRemove }) {
  return (
    <div className="basket-items-cont">
      <div className="basket-item-left">
        <img className="basket-item-image" src={image} alt={title} />
      </div>
      <div className="basket-item-right">
        <h3 className="basket-item-title">{title}</h3>
        <h3 className="basket-item-price">{price}</h3>
        <button className="basket-item-btn" onClick={onRemove}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
