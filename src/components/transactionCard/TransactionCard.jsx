import "./TransactionCard.css";

function TransactionCard({ transaction }) { // Componentes sin estado, stateless
    return (
        <div className="transaction-card">
            <div className="transaction-line">
                <span className="col date">{transaction.date}</span>
                <span className="col concepto">{transaction.description}</span>
                { transaction.type == "expense" ? 
                    (<span className="col cantidad">{-transaction.amount}</span>)
                     : 
                    (<span className="col cantidad">{transaction.amount}</span>) }
                { transaction.balance < 0 ? 
                    (<span className="col saldo negativo">{transaction.balance}</span>) 
                    : 
                    (<span className="col saldo">{transaction.balance}</span>) }
            </div>
        </div>
    );
}

export default TransactionCard;