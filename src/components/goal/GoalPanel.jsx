import "./Goal.css";


function GoalPanel({ goalSelected, onChange, onSave, onDelete, onNew, onIncome, onCancel, isNew }) {

    const handleChange = (field, value) => {
        onChange({ ...goalSelected, [field]: value });
    };

    return (
        <div className="panel">
            <div className="merge-all">
                <h4>Goals</h4>
            </div>
            <div className="label">
                <div className="field">Creation date:</div>
                <div>{goalSelected?.createdAt ? goalSelected.createdAt.split("T")[0] : ""}</div>
            </div>
            <div className="label">
                <div className="field">Current amount:</div>
                <div>{goalSelected?.currentAmount ? goalSelected.currentAmount : ""} €</div>
            </div>
       
                <div className="field">
                    <label>Title</label>
                    <input
                        value={goalSelected?.title ? goalSelected.title : ""}
                        onChange={(e) => handleChange("title", e.target.value)}
                        className="input" />
                </div>
                <div className="field">
                    <label>Target amount</label>
                    <input type="number"
                        value={goalSelected?.targetAmount ? goalSelected.targetAmount : ""}
                        onChange={(e) => handleChange("targetAmount", e.target.value)}
                        className="input" />
                </div>
                <div className="field">
                    <label>Expire date</label>
                    <input type="date"
                        value={goalSelected?.deadline ? goalSelected.deadline.split("T")[0] : ""}
                        onChange={(e) => handleChange("deadline", e.target.value)}
                        className="input" />
                </div>
     
         
            <div className="field">
                <label>Make income</label>
                <input type="number"
                    value={goalSelected ? 0 : ""}
                    onChange={(e) => handleChange("income", e.target.value)}
                    className="input" />
            </div>
          
                <div className="button-row merge2">
                    <button onClick={onSave} className="button save">Save</button>
                    {!isNew && goalSelected && (
                        <button onClick={onDelete} className="button delete">Delete</button>
                    )}
                    {!isNew && (
                        <button onClick={onNew} className="button new">New</button>
                     )}
                    {!isNew && (
                        <button onClick={onIncome} className="button income">Income</button>
                     )}
                    {isNew && (
                        <button onClick={onCancel} className="button cancel">Cancel</button>
                     )}
                </div>
   
        </div>
    );

}

export default GoalPanel;