import Item from "./Item";
import React, { useState} from "react"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const itemsTodisplay = items.filter((item ) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });


  function handleSelectCategoryChange(event){
    setSelectedCategory(event.target.value)
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsTodisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
