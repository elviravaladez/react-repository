import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //Example of Using Multiple States
    const [enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

   const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        //prevent the default of the request being sent. Therefore, the page will not reload, b/c we stay on the currently loaded page w/out sending any requests anywhere and can continue handling this with JS

        //passing this data to NewExpense.js saveExpenseDataHandler function
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData); //the value that is returned will be received as a parameter in the NewExpense.js file for the "saveExpenseDataHandler" function, ie. the parameter "enteredExpenseData"

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );

    // //Example of Using One State

    // const [userInput, setUserInput] = useState({
    //    enteredTitle:'',
    //    enteredAmount:'',
    //    enteredDate:''
    // });
    //
    // const titleChangeHandler = (event) => {
    //     //using the spread operator to include the other key:value pairs from the userInput object
    //
    //     //not ideal to update state like this
    //     //CODE BELOW
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle: event.title.value,
    //     // })
    //     setUserInput((prevState) => {
    //        return { ...prevState, enteredTitle: event.target.value };
    //     });
    // };
    //
    // const amountChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount: event.title.value,
    //     // })
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredAmount: event.target.value };
    //     });
    // };
    //
    // const dateChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredDate: event.title.value,
    //     // })
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredDate: event.target.value };
    //     });
    // };

    // const titleChangeHandler = (event) => {
    //     console.log(event.target.value);
    // };

    // The above code works just like the vanilla js noted below:
    // document.getElementById('').addEventListener('click', (event) => {
    //     console.log(event);
    // });



    // return (
    //     <form>
    //         <div className="new-expense__controls">
    //             <div className="new-expense__control">
    //                 <label>Title</label>
    //                 <input type="text" onChange={titleChangeHandler}/>
    //             </div>
    //             <div className="new-expense__control">
    //                 <label>Amount</label>
    //                 <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
    //             </div>
    //             <div className="new-expense__control">
    //                 <label>Date</label>
    //                 <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
    //             </div>
    //         </div>
    //         <div className="new-expense__actions">
    //             <button type="submit">Add Expense</button>
    //         </div>
    //     </form>
    // );
};

export default ExpenseForm;