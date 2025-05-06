import "./Budget.css";
import BudgetCard from "./BudgetCard";

function BudgetList({ budgets }) { // Componentes sin estado, stateless
    return (
        <>
            <header>
                <h1>Presupuestos 2025</h1>
                <div className="year-selector">
                    <button>&lt;</button>
                    <span>2025</span>
                    <button>&gt;</button>
                </div>
                <button className="new-budget">+ Nuevo presupuesto</button>
            </header>

            <section className="budget-grid">
                {budgets.map((budget) => {

                    {/* IMPORTANTE: cuando usemos map con un componente, hay que poner un key que lo identifique*/ }
                    return <BudgetCard budget={budget} key={budget.idBudget} />
                })
                }
            </section>

        </>
    );
}

export default BudgetList;