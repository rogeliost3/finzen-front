import {useState} from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { createBudget } from "../../utils/api/budget.js";
import "../auth/Auth.css";
import "../../components/transactionFilter/TransactionFilter.css";

// Página de creación de nuevo presupuesto
function NewBudget(){
    const categories=useLoaderData();
    const navigate = useNavigate();


    //crear el estado de datos del formulario y valores por defecto
    const[budgetData, setBudgetData] = useState({
        idCategory: "",
        limitAmount: "",
        month: ""
    }); 

    // Manejador genérico de cambios en formulario
    const handleChange =(e) => {
        setBudgetData({
             ...budgetData,
             [e.target.name]: e.target.value
        });
    }

    //Manejador del evento submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createBudget(budgetData);
        navigate("/budget/report");
    }

    return (
        <section className="auth-section transaction-filter">
        <form className="login-form">
            <h1>New Budget</h1>
            <label>
                Select category:
                <select className="filter-select" name="idCategory" value={budgetData.idCategory} onChange={handleChange}>
                    {categories.map((category) => (
                        <option key={category.idCategory} value={category.idCategory}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Limit Amount:
                <input name="limitAmount" type="number" value={budgetData.limitAmount} onChange={handleChange} />
            </label>
            <label>
                Month to track:
                <input name="month" type="month" value={budgetData.month} onChange={handleChange} />
            </label>
            <button type="submit" onClick={handleSubmit}>Create budget</button>
        </form>
        </section>
    )
}

export default NewBudget;