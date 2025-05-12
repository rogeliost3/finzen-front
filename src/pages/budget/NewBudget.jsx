import {useState} from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { createBudget } from "../../utils/api/budget.js";
import "../auth/Auth.css";
import "../../components/transactionFilter/TransactionFilter.css";

function NewBudget(){
    const categories=useLoaderData();
    const navigate = useNavigate();


    //crear el estado de datos del formulario y valore por defecto
    const[budgetData, setBudgetData] = useState({
        idCategory: "",
        limitAmount: "",
        month: ""
    }); 

    const handleChange =(e) => {
        setBudgetData({
             ...budgetData,
             [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // budgetData.month = budgetData.month.split("-")[1];
        console.log("budgetData a guardar: ", budgetData);
        const result=await createBudget(budgetData);
        console.log("result: ", result);
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