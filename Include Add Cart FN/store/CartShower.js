import React,{useState} from "react";
import CartContext from "./CartContext";
// const defaultCartState = {
//     items:[],
//     totalAmount: 0
// }

// const cartReducer = (state, action) => {
//     if(action.type === 'ADD') {
//         const updatedList = state.items.concat(action.item);
//         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//         return {
//             items : updatedList,
//             totalAmount : updatedTotalAmount
//         }
//     }
//     return defaultCartState
// };

function CartShower(props){
    // const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);
    const [items, updateItems] = useState([])

    function addToCartFn(item){
        // dispatchAction({type:'ADD',item:item});
        updateItems([...items,item])
        // ContextCart.items.push(item)

    }
    function removeToCartFn(id){
        // dispatchAction({type:'REMOVE',id:id});

    }
    const ContextCart ={
        items: items,
        // totalAmount: cartState.totalAmount,
        // quantity:items,
        addItem:addToCartFn,
        removeItem:removeToCartFn
    }
    return <CartContext.Provider value={ContextCart}>
        {props.children}
    </CartContext.Provider>



}

export default CartShower;

