import React, { useState } from "react"; //importing a function provided by the React library
//useState is a React Hook: allows us to define values as state where changes to these value should reflect in the component function being called again
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = props => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;