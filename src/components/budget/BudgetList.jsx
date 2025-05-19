import "./Budget.css";
import BudgetCard from "./BudgetCard";

function BudgetList({budgets}) { 
    if (budgets===undefined || budgets.length === 0) 
        return (<><p>No budgets.</p></>)
    else
        return ( // TODO: sacar un nuevo componente con los totales 
            <>
                <section className="budget-grid">
                    {budgets
                        //no extraer la seccion totals del json porque genera una Card vacia
                        .filter(budget => !budget.totals) 
                        .map((budget, index) => (
                            <BudgetCard budget={budget} key={index} />
                        ))}
                </section>
            </>
        );
    }

export default BudgetList;