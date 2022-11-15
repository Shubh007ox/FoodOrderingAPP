import { Fragment,useState } from "react";
import Mainheader from "./Components/UI/Mainheader";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartVisible,setCartisVisible] = useState(false);

  const CartisVisibleFn = () => {
    setCartisVisible(true);
  }
  const cartisNotVisible = () => {
    setCartisVisible(false);
  }

  return (
    <Fragment>
      {cartVisible && <Cart onClose={cartisNotVisible}/>}
      <Mainheader onClickCart={CartisVisibleFn} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
