import React, { useEffect, useState } from "react";
import Card from "../Ui/Card";
import classes from "./Cart.module.css";

const Cart = ({ cart, setC ,onClicked}) => {
  const [totalAmount, SetTotlAmount] = useState(0);
  const totalamountHandler = () => {
    let total = 0;
    cart.map((item) => (
        total += item.quantity * item.price
    ))
    SetTotlAmount(total);
  }
  const itmeRemoveHandler = (id) => {
    const list = cart.filter((item) => item.id !== id)
    setC(list);

  }
  useEffect(() => {
    totalamountHandler();
  })
  return (
    <Card>
      <article className={classes.article}>
        <h2>Your Cart</h2>
        {cart?.map((item) => (
          <div key={item.id} className={classes.cart_box}>
            <div>
              <h3>{item.name}</h3>
            </div>
            <div className={classes}>
              <button onClick={()=>onClicked(item,-1)}> - </button>
              <button>{item.quantity}</button>
              <button onClick={()=>onClicked(item,+1)}> + </button>
            </div>
            <div className={classes}>
              <span>{item.price}</span>
              <button onClick={()=>itmeRemoveHandler(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className={classes.total}>
          <span>TotalAmount</span>
          <span> {totalAmount}.00 -- Rs</span>
        </div>
      </article>
    </Card>
  );
};

export default Cart;
