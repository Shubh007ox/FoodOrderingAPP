import { useState } from "react";
import Mainheader from "./Components/UI/Mainheader";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartShower from "./store/CartShower";

function App() {
  const [cartVisible,setCartisVisible] = useState(false);

  const CartisVisibleFn = () => {
    setCartisVisible(true);
  }
  const cartisNotVisible = () => {
    setCartisVisible(false);
  }

  return (
    <CartShower>
      {cartVisible && <Cart onClose={cartisNotVisible}/>}
      <Mainheader onClickCart={CartisVisibleFn} size={5}/>
      <main>
        <Meals />
      </main>
    </CartShower>
  );
}

export default App;
