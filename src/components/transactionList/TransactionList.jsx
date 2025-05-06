import TransactionCard from "../transactionCard/TransactionCard";
import "./TransactionList.css";
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

                    {/* IMPORTANTE: cuando usemos map con un componente, hay que poner un key que lo identifique*/}
                    return <TransactionCard transaction={transaction} key={transaction.idTransaction} /> })
                }
            </section>
        </>
    );
}

export default TransactionList;