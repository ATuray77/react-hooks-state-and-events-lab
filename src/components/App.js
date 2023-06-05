
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, { useState} from "react";

function App() {
  const [lightMode, setLightMode] = useState(false)

  
  // replace 'false' with a state variable that can be toggled between true and false
  function handleDark() {
    setLightMode((lightMode) => !lightMode )
  }
  // this will be used for the Dark Mode Toggle feature
  const appClass = lightMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark} style = {{appClass}}>{ lightMode ? "Dark Mode" : "Light Mode"} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
