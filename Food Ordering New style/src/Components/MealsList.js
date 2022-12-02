import React from "react";
import classes from "./MealsList.module.css";
// import MealsForm from "./MealsForm";

const MealsList = ({ item, onClickss }) => {
  const { name, description, price } = item;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <form className={classes.form}>
          <div className={classes.input}>
            <label>Amount</label>
            <input id="amount" type="number" min="1" defaultValue="1"></input>
          </div>
        </form>
        <div className={classes.but}>
          <button onClick={()=>onClickss(item)}>+ Add</button>
        </div>
      </div>
    </li>
  );
};

export default MealsList;
