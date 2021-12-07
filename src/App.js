
import "./App.css";
import Expense from "./components/Expense";
import React,{useState} from "react";
import NewExpense from "./components/Register/NewExpense";
const EXPENSE_ARRAY = [
  {
    id: 1,
    title: "ZZZZZZZ",
    amount: 799.99,
    date: new Date(2021, 2, 27),
  },
  {
    id: 2,
    title: "AAAA",
    amount: 799.99,
    date: new Date(2021, 11, 27),
  },
  {
    id: 3,
    title: "BBBBBB",
    amount: 799.99,
    date: new Date(2021, 8, 27),
  },
  {
    id: 4,
    title: "CCC",
    amount: 799.99,
    date: new Date(2021, 5, 27),
  },
  {
    id: 5,
    title: "DDDD",
    amount: 799.99,
    date: new Date(2021, 0, 27),
  },
];
function App() {
  
  const[expenses,setExpenses]=useState(EXPENSE_ARRAY);

  const  addExpenseHandler = (expense)=>{
    if(expense!=null){
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  }
  }
    

  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{},'Starting Project !'),
  //   React.createElement(Expense,{items:expense})
  // );

  return (
    <div className="App">
      <div>
        <h2>Starting Project !</h2>
        <NewExpense onAddExpenseHandler={addExpenseHandler}/>
        <Expense items={expenses} />
      </div>
    </div>
  );
}

export default App;
