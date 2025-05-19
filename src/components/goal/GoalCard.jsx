import "./Goal.css";

// Goal card, fila de datos de la lista

function GoalCard({ data, onClick, isSelected }) {
  return (
    <div
      onClick={onClick}
      className={`goal-card ${isSelected ? "selected" : ""}`}>
      <span className="col left">{data.createdAt.split("T")[0]}</span>
      <span className="col left">{data.title}</span>
      <span className="col right">
        {parseFloat(data.targetAmount).toFixed(2)}
      </span>
      <span className="col right">
        {parseFloat(data.currentAmount).toFixed(2)}
      </span>
      <span className="col right">{data.deadline}</span>
    </div>
  );
}

export default GoalCard;
