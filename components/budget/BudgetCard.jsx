import "./Budget.css";

function BudgetCard({ budget }) { // Componentes sin estado, stateless
    return (
        <article className="budget-card">
            <div className="budget-card__category">
                <i className={`fas ${budget.icon} icon`}></i>
                <h2>{budget.categoryName}</h2>
            </div>
            <div className="budget-card__info">
                <p><span>Asignado:</span><span>{budget.limitAmount}€</span></p>
                <p><span>Gastado:</span><span>{budget.totalSpent}€</span></p>
                <p><span>Vencimiento:</span><span>{budget.month}</span></p>
                <p><span>Disponible:</span><span>{budget.balance}€</span></p>

                <div className={`progress-bar ${budget.balance < 0 ? 'excedido' : 'disponible'}`}>
                    <div className="progress" style={{ width: '83%' }}></div>
                </div>

                <span className={`status ${budget.balance < 0 ? 'excedido' : 'disponible'}`}>{budget.balance < 0 ? 'Excedido' : 'Disponible'}</span>
            </div>
        </article>
    );
}

export default BudgetCard;