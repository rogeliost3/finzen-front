import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext.jsx';
import TransactionFilter from "../../components/transactionFilter/TransactionFilter.jsx";
import TransactionList from "../../components/transactionList/TransactionList.jsx";
import fetchData from "../../utils/api/fetch.js";

function TransactionPage() {
    const { userData } = useContext(AuthContext);
    const [transactions, setTransactions] = useState([]);
    const [categories, setCategories] = useState(useLoaderData);

    const handleSearch = async (filters) => {
        try {
            const data = await fetchData("/transaction/getCatAndDate", "POST", filters);
            setTransactions(data);
        } catch (error) {
            console.error("Error al buscar transacciones:", error);
        }
    };
    return (
        <section>
            {userData!==null && <TransactionFilter onSearch={handleSearch} categories={categories}/>}
            {userData!==null && <TransactionList transactions={transactions}/>}
        </section>
    );
}

export default TransactionPage;
