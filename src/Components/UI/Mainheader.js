import React from "react";
import classes from "./Mainheader.module.css";
import Bg from "./Bg";

function Mainheader() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MC_Ronalds</h1>
        <button className={classes.button}>CART</button>
      </header>
      <Bg />
    </React.Fragment>
  );
};
export default Mainheader;
