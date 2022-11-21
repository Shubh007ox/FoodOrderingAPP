import React from "react";

const CartContext = React.createContext({
    items:[],
    // totalAmount:0,
    // quantuty:0,
    addItem: (item) => {},
    removeItem: (id) => {}

});

export default CartContext;
//1..Initialize the store with the keys(structure of the store)
//2..You would have to make this object globally accessible to all the components