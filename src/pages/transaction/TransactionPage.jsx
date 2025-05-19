import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext.jsx';
import TransactionFilter from "../../components/transactionFilter/TransactionFilter.jsx";
import TransactionList from "../../components/transactionList/TransactionList.jsx";
import fetchData from "../../utils/api/fetch.js";
import "./TransactionPage.css";

// Página de transacciones, lista y filtro
function TransactionPage() {
    const { userData } = useContext(AuthContext);
    const [transactions, setTransactions] = useState([]);
    
    const categories = useLoaderData(); 
    
    const handleSearch = async (filters) => {
        try {
            const data = await fetchData("/transaction/getCatAndDate", "POST", filters);
            setTransactions(data);
        } catch (error) {
            console.error("Error al buscar transacciones:", error);
        }
    };
    return (
        <section className="transaction-page">
            {userData!==null && <TransactionFilter onSearch={handleSearch} categories={categories}/>}
            <section className="transactions-header">
                <span className="col date">Fecha</span>
                <span className="col concepto">Concepto</span>
                <span className="col cantidad">Cantidad</span>
                <span className="col saldo">Saldo</span>
            </section>
            {userData!==null && <TransactionList transactions={transactions}/>}
        </section>
    );
}

export default TransactionPage;
