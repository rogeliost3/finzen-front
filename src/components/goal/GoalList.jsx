import GoalCard from "./GoalCard";
import "./Goal.css";


function GoalList({ goals, onSelect, idSelected }) {
return (
  <section className="goals-container">
    <section className="goals-header">
      <span className="col left">Created</span>
      <span className="col left">Title</span>
      <span className="col right">Target</span>
      <span className="col right">Current</span>
      <span className="col right">Expires</span>
    </section>
    <section className="goal-list">
      {Array.isArray(goals) && goals.map((goal) => (
        <GoalCard
          key={goal.idGoal}
          data={goal}
          onClick={() => onSelect(goal)}
          isSelected={goal.idGoal === idSelected}
        />
      ))}
    </section>
  </section>
);

}

export default GoalList;