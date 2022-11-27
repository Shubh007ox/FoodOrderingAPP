import React,{useRef,useState} from "react";
import classes from './MealsForm.module.css';
import Input from "../UI/Input";

function MealsForm(props) {
  const AinputRef = useRef();
  const [amountIsValid,setAmount] = useState(true)
  const addToCartFn = event => {
    event.preventDefault();
    const enteredAmount = AinputRef.current.value;
    const enteredAmountNumber = +enteredAmount
    if(
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ){
      setAmount(false)
      return;
    }
    props.onAddTOCartA(enteredAmountNumber)
  }
  // const  cartCtx= useContext(CartContext)
  // const addTOCartFuns = (event) => {
  //   event.preventDefalut()
  //   // console.log(event)
  //   // cartContext.addItem(props.item)
  //   const quantity = document.getElementById('amount' +props.id).value
  //   cartCtx.addItem({...props.item, quantity:quantity})
  // }
  return (
    <form className={classes.form} onSubmit={addToCartFn}>
        <Input
         ref={AinputRef}
         label="Amount" input={{
            id:'amount' +props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button>+ ADD</button>
        {!amountIsValid && <p>Enter a valid amount</p>}
    </form>
  );
};

export default MealsForm;
