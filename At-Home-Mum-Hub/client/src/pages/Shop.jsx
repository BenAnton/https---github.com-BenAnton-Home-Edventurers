import "../pages/Shop.css";
import ItemCard from "../components/ItemCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Shop() {
  const { items } = useContext(CartContext);

  console.log("Items in shop: ", items);

  if (!items) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="banner">
        <h2 className="banner-text">
          Lovingly crafted resource packs for the Home Edventurers of this
          world...
        </h2>
      </div>
      <div className="items-cont">
        {items &&
          items.map((item) =>
            item ? (
              <ItemCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ) : null
          )}
      </div>
    </>
  );
}

export default Shop;
