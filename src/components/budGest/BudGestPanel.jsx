import "./Budgets.css";


function BudGestPanel({ budgetSelected, onChange, onSave, onDelete, onNew, onCancel, isNew }) {

    const handleChange = (field, value) => {
        onChange({ ...budgetSelected, [field]: value });
    };

    return (
        <div className="panel">
            <div className="merge-all">
                <h4>Budgets</h4>
            </div>
            <div className="label">
                <div className="field">Creation date:</div>
                <div>{budgetSelected?.createdAt ? budgetSelected.createdAt.split("T")[0] : ""}</div>
            </div>
       
                <div className="field">
                    <label>Category</label>
                    <input
                        value={budgetSelected?.idCategory ? budgetSelected.idCategory : ""}
                        onChange={(e) => handleChange("idCategory", e.target.value)}
                        className="input" />
                </div>
                <div className="field">
                    <label>Limit amount</label>
                    <input type="number"
                        value={budgetSelected?.limitAmount ? budgetSelected.limitAmount : ""}
                        onChange={(e) => handleChange("limitAmount", e.target.value)}
                        className="input" />
                </div>
                <div className="field">
                    <label>Month</label>
                    <input type="month"
                        value={budgetSelected?.month ? budgetSelected.month : ""}
                        onChange={(e) => handleChange("deadline", e.target.value)}
                        className="input" />
                </div>
          
                <div className="button-row merge2">
                    <button onClick={onSave} className="button save">Save</button>
                    {!isNew && budgetSelected && (
                        <button onClick={onDelete} className="button delete">Delete</button>
                    )}
                    {!isNew && (
                        <button onClick={onNew} className="button new">New</button>
                     )}
                    {isNew && (
                        <button onClick={onCancel} className="button cancel">Cancel</button>
                     )}
                </div>
   
        </div>
    );

}

export default BudGestPanel;