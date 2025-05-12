import BudGestCard from "./BudGestCard";
import "./BudGest.css";


function BudGestList({ budgets, onSelect, idSelected }) {
return (
  <section className="goals-container">
    <section className="goals-header">
      <span className="col left">Created</span>
      <span className="col left">Category</span>
      <span className="col right">Limit</span>
      <span className="col right">Month</span>
    </section>
    <section className="goal-list">
      {Array.isArray(budgets) && budgets.map((budget) => (
        <BudGestCard
          key={budget.idBudget}
          data={budget}
          onClick={() => onSelect(budget)}
          isSelected={budget.idBudget === idSelected}
        />
      ))}
    </section>
  </section>
);

}

export default BudGestList;