import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    //Example of Using Multiple States

   //  const [enteredTitle, setEnteredTitle] = useState('');
   //  const[enteredAmount, setEnteredAmount] = useState('');
   //  const[enteredDate, setEnteredDate] = useState('');
   //
   // const titleChangeHandler = (event) => {
   //      setEnteredTitle(event.target.value);
   //  };
   //
   //  const amountChangeHandler = (event) => {
   //      setEnteredAmount(event.target.value);
   //  };
   //
   //  const dateChangeHandler = (event) => {
   //      setEnteredDate(event.target.value);
   //  };

    //Example of Using One State
    const [userInput, setUserInput] = useState({
       enteredTitle:'',
       enteredAmount:'',
       enteredDate:''
    });

    const titleChangeHandler = (event) => {
        //using the spread operator to include the other key:value pairs from the userInput object

        //not ideal to update state like this
        //CODE BELOW
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.title.value,
        // })
        setUserInput((prevState) => {
           return { ...prevState, enteredTitle: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.title.value,
        // })
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.title.value,
        // })
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    };

    // const titleChangeHandler = (event) => {
    //     console.log(event.target.value);
    // };

    // The above code works just like the vanilla js noted below:
    // document.getElementById('').addEventListener('click', (event) => {
    //     console.log(event);
    // });

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;