import { Fragment } from "react";
import Mainheader from "./Components/UI/Mainheader";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Mainheader />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
