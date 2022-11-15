import React from "react";
import classes from './DynamicB.module.css';
function DynamicButton(props){
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
            </span>

            <span>Your Cart</span>
            <span className={classes.badge}>2</span>
        </button>

    );
};

export default DynamicButton;