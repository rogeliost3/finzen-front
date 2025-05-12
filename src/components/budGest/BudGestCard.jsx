import "./BudGest.css";

function BudGestCard({ data, onClick, isSelected }) {
return (
  <div
    onClick={onClick}
    className={`goal-card ${isSelected ? "selected" : ""}`}
  >
    <span className="col left">{data.createdAt.split("T")[0]}</span>
    <span className="col left">{data.idCategory}</span>
    <span className="col right">{parseFloat(data.limitAmount).toFixed(2)}</span>
    <span className="col right">{data.month}</span>
  </div>
);

}

export default BudGestCard;
