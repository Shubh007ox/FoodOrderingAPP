import React,{useContext} from "react";
import classes from './MealList.module.css';
import MealsForm from "./MealsForm";
import CartContext from "../../store/CartContext";

function MealList(props){
    const price = `{${props.price.toFixed(2)} Rs}`;
    const cartCtx = useContext(CartContext)

    const addToCartFns = amount => {
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })


    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsForm onAddTOCartA={addToCartFns} />
            </div>
        </li>
    )
}

export default MealList;