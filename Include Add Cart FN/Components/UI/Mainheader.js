import React from "react";
import classes from "./Mainheader.module.css";
import DynamicButton from "./DynamicButton";
import Bg from "./Bg";

function Mainheader(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MC_Ronalds</h1>
        <DynamicButton onClick={props.onClickCart}/>
      </header>
      <Bg />
    </React.Fragment>
  );
};
export default Mainheader;
