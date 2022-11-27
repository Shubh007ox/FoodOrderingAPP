import React from "react";
import classes from "./MenuAva.module.css";
import Card from "../UI/Card";
import MealList from "./MealList";
const OurSpeciality = [
  {
    id: "m1",
    name: "The Indulgence Burger",
    description: "Special Cheese and Juicy",
    price: 700,
  },
  {
    id: "m2",
    name: "The X Burger",
    description: "A german specialty!",
    price: 350,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 400,
  },
  {
    id: "m4",
    name: "The Douche Buerger",
    description: "Healthy...and green...",
    price: 450,
  },
];

function MenuAvailable() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {OurSpeciality.map((meal) => 
            <MealList key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}  />
          )}
        </ul>
      </Card>
    </section>
  );
}

export default MenuAvailable;
