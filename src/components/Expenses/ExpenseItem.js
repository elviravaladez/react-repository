import React, { useState } from "react"; //importing a function provided by the React library
//useState is a React Hook: allows us to define values as state where changes to these value should reflect in the component function being called again
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title);
    //useState() returns an array
    //useState ALWAYS returns two elements
    //current state value and function for updating that value
    //useState registers some state value for a specific component INSTANCE

    //Whenever state changes, it is only the component function, and that SPECIFIC INSTANCE where the component is being use where that component is being used where React will re-evaluate.

    //best practice to name the two elements by useState()

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;