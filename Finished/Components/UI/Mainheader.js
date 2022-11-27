import React from "react";
import classes from "./Mainheader.module.css";
import DynamicButton from "./DynamicButton";
import Bg from "./Bg";

function Mainheader(props,{size}) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MC_Ronalds</h1>
        <DynamicButton onClick={props.onClickCart}/>
      </header>
      <span>{size}</span>
      <Bg />
    </React.Fragment>
  );
};
export default Mainheader;
