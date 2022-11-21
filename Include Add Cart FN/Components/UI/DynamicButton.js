import React,{ useContext } from "react";
import classes from './DynamicB.module.css';
import CartContext from "../../store/CartContext";
function DynamicButton(props){
    const CartContextss = useContext(CartContext);
    let quantity = 0;
    CartContextss.items.forEach(item => {
        quantity = quantity + Number(item.quantity)
    })

    // const numberOfCartItems = CtxCart.items.reduce((currentNumber,item) => {
    //   return currentNumber + item.amount;
    // },0);
    return(
        <button className={classes.button} onClick={props.onClick}>
            {/* <span className={classes.icon}>
            </span> */}

            <span>Your Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>

    );
};

export default DynamicButton;