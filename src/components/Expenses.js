import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = (props) => {
  const date = new Date();
  const {items} = props; 
  console.log(items);
  return (
    <div className="expenses">
      {items.map((item) => <ExpenseItem title={item.title} date={item.date} amount={item.price} />)}
    </div>
  );
}

export default Expenses;