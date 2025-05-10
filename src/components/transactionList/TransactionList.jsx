import TransactionCard from "../transactionCard/TransactionCard";
import "./TransactionList.css";

// const [error, setError] = useState(null);

function TransactionList({transactions}) {
    // const [transactions, setTransactions] = useState([]);
    if (!transactions || transactions.length === 0) 
        return (<><p>No transactions.</p></>)
    else
        return (
            <section>
                {/* <TransactionFilter onSearch={handleSearch} /> */}
                {/* {error && <div className="error-message">{error}</div>} */}
                <section className="transactions-header">
                    <span className="col date">Fecha</span>
                    <span className="col concepto">Concepto</span>
                    <span className="col cantidad">Cantidad</span>
                    <span className="col saldo">Saldo</span>
                </section>
                <section className="transactions-container">
                    {/* <div ref={firstTransactionRef}></div> */}
                    {Array.isArray(transactions) && (transactions.map((transaction) => {
                        return <TransactionCard transaction={transaction} key={transaction.idTransaction} />
                    }))}
                    {/* <button onClick={handleScrollToTop}>Arriba</button> */}
                    {/* <div ref={lastTransactionRef}></div> */}
                </section>
            </section>
        )
}

/*
function TransactionList({ transactions }) {
    return (
        <>
            <section class="transactions-header">
                <span class="col date">Fecha</span>
                <span class="col concepto">Concepto</span>
                <span class="col cantidad">Cantidad</span>
                <span class="col saldo">Saldo</span>
            </section>
            <section class="transactions-container">
                {transactions.map((transaction) => {
                    return <TransactionCard transaction={transaction} key={transaction.idTransaction} /> })
                }
            </section>
        </>
    );
}*/

export default TransactionList;