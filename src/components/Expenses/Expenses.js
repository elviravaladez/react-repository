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

    return (
        <div>
            <Card className="expenses">
                {/*Creating a controlled component*/}
                <ExpenseFilter
                    selected={filterYear}
                    onSaveExpenseFilter={saveExpenseFilterHandler}
                />
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>
                ))}
            </Card>
        </div>
    );
};

export default Expenses;