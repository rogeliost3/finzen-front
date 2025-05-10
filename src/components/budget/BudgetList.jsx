import "./Budget.css";
import BudgetCard from "./BudgetCard";

// const [error, setError] = useState(null);

function BudgetList({budgets}) { 
    if (budgets===undefined || budgets.length === 0) 
        return (<><p>No budgets.</p></>)
    else
        return (
            <>
                <section className="budget-grid">
                    {budgets.map((budget) => {
                        return <BudgetCard budget={budget} key={budget.idBudget} />
                    })
                    }
                </section>
            </>
        );
    }

export default BudgetList;