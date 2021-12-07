import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
    setisEditing(false);
  };
  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditinghandler=()=>{
    setisEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancle={stopEditinghandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};
export default NewExpense;
