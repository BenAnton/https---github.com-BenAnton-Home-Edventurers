/* eslint-disable react/prop-types */
import "../components/ItemCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function ItemCard({ id, image, title, price, description }) {
  const { items, addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(id);
  };

  const item = items.find((item) => item.id === id);
  const isAddedToCart = item ? item.inCart : false;

  return (
    <div className="item-card-cont">
      <div className="item-card-left">
        <img className="item-image" src={image} alt={title} />
      </div>
      <div className="item-card-right">
        <h3 className="item-title">{title}</h3>
        <h3 className="item-price">{price}</h3>
        <p className="item-description">{description}</p>
        <button className="item-button" onClick={handleAddToCart}>
          {isAddedToCart ? "Added" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
