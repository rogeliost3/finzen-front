import "./TransactionCard.css";

function TransactionCard({ transaction }) { // Componentes sin estado, stateless
    return (
        <div className="transaction-card">
            <div className="transaction-line">
                <span className="col date">{transaction.date}</span>
                <span className="col concepto">{transaction.description}</span>
                { transaction.type == "expense" ? 
                    (<span className="col cantidad">{parseFloat(-transaction.amount).toFixed(2)}</span>)
                     : 
                    (<span className="col cantidad">{parseFloat(transaction.amount).toFixed(2)}</span>) }
                { transaction.balance < 0 ? 
                    (<span className="col saldo negativo">{parseFloat(transaction.balance).toFixed(2)}</span>) 
                    : 
                    (<span className="col saldo">{parseFloat(transaction.balance).toFixed(2)}</span>) }
            </div>
        </div>
    );
}

export default TransactionCard;