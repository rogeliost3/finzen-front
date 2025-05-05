import { useState } from 'react'; //librerias externas
import TransactionCard from '../components/transactionCard/TransactionCard.jsx';
import TransactionList from '../components/transactionList/TransactionList.jsx';
import {budgets, transactions} from './utils/data.js';
import BudgetList from '../components/budget/BudgetList.jsx';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BudgetList budgets={budgets}/>
      {/* <TransactionList transactions={transactions} />     */}
    </>
  )
}

export default App;
