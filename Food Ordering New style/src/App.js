import React, { useState } from "react";
import MealsAva from "./Components/MealsAVa2";
import Mainheader from "./Components/Mainheader";
// import MealsSummary from "./Components/MealsSummery";
import classes from './Components/warning.module.css';
import Cart from "./Components/Cart/Cart";
// import MealsItem from "./Components/MealsItem";

function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [cartIsVisible, setCartIsVisible] = useState([]);
  const [inCartwarning, setCartwarning] = useState(false);

  const addToCartHandlerFn = (item) => {
    let ALreadyInCart = false;
    cartIsVisible.forEach((product) => {
      if (item.id === product.id) 
      ALreadyInCart = true;
    });
    if (ALreadyInCart) {
      setCartwarning(true);
      setTimeout(() => {
        setCartwarning(false);
      }, 2000);
      return;
    }
    setCartIsVisible([...cartIsVisible, item]);
  };
  const upDateValueHandler = (item,sign) => {
    // console.log(props)
    let indexx = -1;
    cartIsVisible.forEach((data,index) => {
      if(data.id === item.id)
        indexx = index
    });
    const newCart = cartIsVisible;
    newCart[indexx].quantity += sign
    if(newCart[indexx].quantity === 0)
      newCart[indexx].quantity = 1;
    setCartIsVisible([...newCart])
  }
  return (
    <React.Fragment>
      <Mainheader size={cartIsVisible.length} onClicked={setIsClicked}/> 
      {
        isClicked ?  <MealsAva onClickss={addToCartHandlerFn} /> : <Cart cart={cartIsVisible} setC={setCartIsVisible} onClicked={upDateValueHandler} />
      }
      {
        inCartwarning && <div className={classes.warning}>Item is already There!!</div>
      }
    </React.Fragment>
  );
}

export default App;
