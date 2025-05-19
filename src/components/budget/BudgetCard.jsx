import "./Budget.css";

function BudgetCard({ budget }) {
    const { icon, categoryName, limitAmount, totalSpent, month, balance } = budget;

    // Cálculo de porcentajes
    const porcentajeGasto = Math.min((totalSpent / limitAmount) * 100, 100); // máximo 100%
    const porcentajeExceso = totalSpent > limitAmount ? ((totalSpent - limitAmount) / limitAmount) * 100 : 0;

    return (
        <article className="budget-card">
            <div className="budget-card__category">
                <i className={`fas ${icon} icon`}></i>
                <h2>{categoryName}</h2>
            </div>

            <div className="budget-card__info">
                <p><span>Asignado:</span><span>{limitAmount}€</span></p>
                <p><span>Gastado:</span><span>{totalSpent}€</span></p>
                <p><span>Vencimiento:</span><span>{month}</span></p>
                <p><span>Disponible:</span><span>{balance}€</span></p>

                <div className="progress-bar">
                    <div
                        className="progress green"
                        style={{ width: `${porcentajeGasto}%` }}
                    ></div>
                    {balance < 0 && (
                        <div
                            className="progress red"
                            style={{ width: `${porcentajeExceso}%` }}
                        ></div>
                    )}
                </div>

                <span className={`status ${balance < 0 ? 'excedido' : 'disponible'}`}>
                    {balance < 0 ? 'Excedido' : 'Disponible'}
                </span>
            </div>
        </article>
    );
}

export default BudgetCard;