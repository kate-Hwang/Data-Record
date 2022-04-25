import './App.css';
import ExpenseItem from './components/Expenseltem';

function App() {

  const expenses = [
    { id:'e1', title: 'transform', amount:20.67, date: new Date(2022, 2, 20)},
    { id:'e2', title: 'Car Insurance', amount:294.67, date: new Date(2022, 11, 25)},
    { id:'e3', title: 'new TV', amount:799.07, date: new Date(2022, 5, 15)},
    { id:'e4', title: 'new Macbook', amount:450, date: new Date(2022, 10, 13)},
  ];

  return (
    <div>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date} 
      />
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date} 
      />
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date} 
      />
    </div>
  );
}

export default App;
