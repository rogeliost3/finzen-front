import '../transactionFilter/TransactionFilter.css';
import { useNavigate } from "react-router-dom";

function BudgetReportFilter({ onSearch, year, setYear }) {
    const navigate = useNavigate();

    const incYear = (event) => {
        event.preventDefault();
        setYear(year + 1);
        //No es necesario al detectar el cambio el useEffect de BudgetPage
        //onSearch();
    }
    const decYear = (event) => {
        event.preventDefault();
        setYear(year - 1);
       //onSearch();
    }
    const handleNewBudget = (event) => {
        event.preventDefault();
        navigate("/budget/create");
    };

    return (
        <section className="budget-filter">
            <h4>Annual budget report</h4>
            <form>
                 <div className="year-selector">
                   
                    <button onClick={decYear}><i className={"fa-solid fa-arrow-left"}/></button>
                    <span>{year}</span>
                    <button onClick={incYear}><i className={"fa-solid fa-arrow-right"}/></button>
                 </div>
                 <button className="new-budget" onClick={handleNewBudget}>+ New Budget</button> 

            </form>
        </section>
    );
    
}

export default BudgetReportFilter;