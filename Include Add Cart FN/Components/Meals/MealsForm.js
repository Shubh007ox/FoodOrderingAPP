import React,{useContext} from "react";
import classes from './MealsForm.module.css';
import Input from "../UI/Input";

function MealsForm(props) {
  // const  CartContexts= useContext(CartContext)
  // function addTOCartFuns(event){
  //   event.preventDefalut()
  //   // console.log(event)
  //   // cartContext.addItem(props.item)
  //   const quantity = document.getElementById('amount' +props.id).value
  //   CartContexts.addItem({...props.item, quantity:quantity})
  // }
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{
            id:'amount' +props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button>+ ADD</button>
        
    </form>
  );
};

export default MealsForm;
