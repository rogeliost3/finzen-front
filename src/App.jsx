import { useState } from 'react'
import transactions from './utils/data.js'
import './App.css'
import TransactionCard from '../components/transactionCard/TransactionCard.jsx'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <TransactionCard transaction={transactions[0]}/>
    <TransactionCard transaction={transactions[1]}/>
    <TransactionCard transaction={transactions[2]}/>
    <TransactionCard transaction={transactions[3]}/>
    </>
  )
}

export default App;
