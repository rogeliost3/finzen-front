import { useState } from 'react'; //librerias externas
import TransactionCard from '../components/transactionCard/TransactionCard.jsx';
import TransactionList from '../components/transactionList/TransactionList.jsx';
import transactions from './utils/data.js';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <TransactionList transactions={transactions} />    
    </>
  )
}

export default App;
