import React from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    //saving the Expense Data with function below
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //passing this data from the ExpenseForm.js file
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        {/*Making sure we can pass Expense Data to App.js*/}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;