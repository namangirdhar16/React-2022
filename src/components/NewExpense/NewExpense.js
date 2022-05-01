import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddExpense}) => {
    const expenseDataHandler = (data) => {
       const expenseData = {
           ...data, 
           id: Math.random().toString()
       }
    //    console.log(expenseData);
       onAddExpense(expenseData);
    }
    return (<div className="new-expense">
         <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>)
}

export default NewExpense;