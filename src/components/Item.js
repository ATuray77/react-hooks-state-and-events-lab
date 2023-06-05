import React, { useState } from "react";

function Item({ name, category }) {
  const [insideCart, setInsideCart] = useState(false);

  function handleClick() {
    setInsideCart((insideCart) => !insideCart);
  }

  return (
    <li className={insideCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {insideCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
