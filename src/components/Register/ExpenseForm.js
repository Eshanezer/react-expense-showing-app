import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [enteredTitle,setEntredTitle] =useState('');
    const [enteredAmount,setEntredAmount] =useState('');
    const [enteredDate,setEntredDate] =useState('');
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
  const titleChangeHandler = (event) => {
      setEntredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.title,
    // });

    // 2
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    setEntredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.amount,
    // });
    // 2
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value};
    // });
  };
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.date,
    // });
    // 2
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate:event.target.value};
    // });
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEntredTitle('');
    setEntredAmount('');
    setEntredDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-01"
            step="2020-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>Cancle</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
