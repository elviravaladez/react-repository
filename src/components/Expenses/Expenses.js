import React, { useState } from "react";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
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

    return (
        <div>
            <Card className="expenses">
                {/*Creating a controlled component*/}
                <ExpenseFilter
                    selected={filterYear}
                    onSaveExpenseFilter={saveExpenseFilterHandler}
                />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;