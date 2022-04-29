import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expense/Expense';
import { useState } from 'react';

    const DUMMY_EXPENSE = [
      { id:'e1', title: 'transform', amount:20.67, date: new Date(2022, 2, 20)},
      { id:'e2', title: 'Car Insurance', amount:294.67, date: new Date(2022, 11, 25)},
      { id:'e3', title: 'new TV', amount:799.07, date: new Date(2022, 5, 15)},
      { id:'e4', title: 'new Macbook', amount:450, date: new Date(2022, 10, 13)},
    ];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expenses, ...prevExpenses]
    });
  };

  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expense items={expenses}/>
      </div>
  );
}

export default App;
