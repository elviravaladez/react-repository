import React, { useState } from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020');

    const saveExpenseFilterHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }
    return (
        <div>
            <Card className="expenses">
                {/*Creating a controlled component*/}
                <ExpenseFilter
                    selected={filterYear}
                    onSaveExpenseFilter={saveExpenseFilterHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;