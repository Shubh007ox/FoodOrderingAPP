import React from "react";
import classes from './MealList.module.css';
import MealsForm from "./MealsForm";

function MealList(props){
    const price = `{${props.price.toFixed(2)} Rs}`;
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsForm />
            </div>
        </li>
    )
}

export default MealList;