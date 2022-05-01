import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = ({onSaveExpenseData}) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // we can use single state too 
    // setUserInput((prevState) => {
        //   return { ...prevState, userEnteredState}
    // })
    // because react schedules updates

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }
    
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }
    
    const formHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
    }
    return (<form onSubmit={formHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={titleChangeHandler} value={enteredTitle} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={amountChangeHandler} value={enteredAmount} type="number" min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={dateChangeHandler} value={enteredDate} type="date" min="2022-04-27" max="2022-12-30" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;