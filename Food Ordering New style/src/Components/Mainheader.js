import React from "react";
import classes from "./Mainheader.module.css";
// import Burger from "./store/Burger.jpg";
// import MealsSummary from "./MealsSummery";

function Mainheader({size,onClicked}) {
  return (
    <React.Fragment>
      <nav className={classes.header}>
        <span onClick={()=>onClicked(true)}>
          <h1>MC_Ronalds</h1>
        </span>
        <div>
          <button className={classes.button} onClick={()=>onClicked(true)}>
            <span>
              <h2>Home</h2>
            </span>

          </button>
        </div>
        <div>
          <button className={classes.button} onClick={()=>onClicked(false)}>
            <span>
              <h2>Your Cart</h2>
            </span>
            <span className={classes.badge}>{size}</span>
          </button>
        </div>
      </nav>
      {/* <div className={classes["main-image"]}>
        <img src={Burger} alt="Pick Your Grab" />
      </div> */}
      {/* <MealsSummary /> */}
    </React.Fragment>
  );
}

export default Mainheader;
