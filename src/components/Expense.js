import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Exoense.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expense(props) {
  const [filterdYear, setFilteredYear] = useState("2020");
  const filterChnageHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filterdYear;
  });
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filterdYear}
        onChnageFilter={filterChnageHandler}
      />
      <ExpensesChart expenses={filterdExpenses}/>
      <ExpensesList items={filterdExpenses}/>
    </div>
  );
}
export default Expense;
