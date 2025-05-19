import BudgetReportFilter from "../../components/budget/BudgetFilter.jsx";
import BudgetList from "../../components/budget/BudgetList.jsx";
import { getBudgetsReport } from "../../utils/api/budget.js";
import { useEffect, useState} from "react";

// Página de presupuestos
function BudgetPage() {
    const [budgets, setBudgets] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    
    const handleSearch = async () => {
        const data = await getBudgetsReport(year);
        setBudgets(data);
    };

    //hace que el renderizado se ejecute cada vez que cambia el year BudgetReportFilter
    useEffect(() => {
        handleSearch(); // Carga inicial, despues de renderizarse
    }, [year]); //aqui es donde lo hacemos dependiente de year para que se actualice

    return (
        <section>
            <BudgetReportFilter onSearch={handleSearch} year={year} setYear={setYear} />
            <BudgetList budgets={budgets} />
        </section>
    );
}

export default BudgetPage;
