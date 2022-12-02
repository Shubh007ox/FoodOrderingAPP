import React from "react";
import MenuAvaliable from "./MealsAva";
import Card from "./Ui/Card";
import classes from "./MealsAV.module.css";
import MealsList from "./MealsList";
import Burger from "./store/Burger.jpg";
import MealsSummary from "./MealsSummery";
function MealsAva({ onClickss }) {
  return (
    <React.Fragment>
      <div className={classes["main-image"]}>
        <img src={Burger} alt="Pick Your Grab" />
      </div>
      <MealsSummary /><br></br>
      <section className={classes.meals}>
        <Card>
          <ul>
            {MenuAvaliable.map((item) => (
              <MealsList key={item.id} item={item} onClickss={onClickss} />
            ))}
          </ul>
        </Card>
      </section>
    </React.Fragment>
  );
}

export default MealsAva;
