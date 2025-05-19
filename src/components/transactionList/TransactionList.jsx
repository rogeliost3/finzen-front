import TransactionCard from "../transactionCard/TransactionCard";
import "./TransactionList.css";

//TODO: Agregar paginado

//Componente de listado de transacciones que incluye al TransactionCard
function TransactionList({transactions}) {

    if (!transactions || transactions.length === 0) 
        return (
        <section className="transactions-header">
            <p>No transactions.</p>
        </section>)
    else
        return (
            <section>
                <section className="transactions-container">
                    {Array.isArray(transactions) && (transactions.map((transaction) => {
                        return <TransactionCard transaction={transaction} key={transaction.idTransaction} />
                    }))}
                </section>
            </section>
        )
}


export default TransactionList;