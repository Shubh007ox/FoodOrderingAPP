import React,{useReducer} from "react";
import CartContext from "./CartContext";
const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const sameItemInCart = state.items.findIndex((item) => item.id === action.item.id)
        const sameItem = state.items[sameItemInCart]
        let  updatedList;
        if(sameItem){
            const  updtedItem = {
                ...sameItem,
                amount:sameItem.amount + action.item.amount
            };
            updatedList = [...state.items];
            updatedList[sameItemInCart] = updtedItem;

        }else{
            updatedList = state.items.concat(action.item);

        }

        return {
            items : updatedList,
            totalAmount : updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const sameItemInCart = state.items.findIndex(
            (item) => item.id === action.id
        )
        const sameItem = state.items[sameItemInCart];
        const updatedTotalAmount = state.totalAmount - sameItem.price;
        let updatedList;
        if(sameItem.amount === 1){
            updatedList = state.items.filter(item => item.id !== action.id);


        }else{
            const updatedItem = {...sameItem,amount: sameItem.amount - 1};
            updatedList = [...state.items];
            updatedList[sameItemInCart] = updatedItem;

        }

        return {
            items: updatedList,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartState
};

function CartShower(props){
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);
    // const [items, updateItems] = useState([])

    function addToCartFn(item){
        dispatchAction({type:'ADD',item:item});
        // updateItems([...items,item])
        // ContextCart.items.push(item)

    }
    function removeToCartFn(id){
        dispatchAction({type:'REMOVE',id:id});

    }
    const contextCart ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        // quantity:items,
        addItem:addToCartFn,
        removeItem:removeToCartFn
    }
    return <CartContext.Provider value={contextCart}>
        {props.children}
    </CartContext.Provider>

}

export default CartShower;

