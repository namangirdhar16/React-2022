
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const App = () => {
  // const date = new Date();
  const [expenses, setExpenses] = useState([]);
  const expenseDataHandler = (data) => {
    setExpenses(() => {
      return [...expenses, data];
    })
  }
  

  return (
    <div className="App">
    <NewExpense onAddExpense={expenseDataHandler}/>
    <Expenses  items={expenses} />
    </div>
  );
}

export default App;
