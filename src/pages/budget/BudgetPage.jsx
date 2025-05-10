import BudgetReportFilter from "../../components/budget/BudgetFilter.jsx";
import BudgetList from "../../components/budget/BudgetList.jsx";
import { getBudgetsReport } from "../../utils/api/budget.js";
import { useEffect, useState} from "react";


function BudgetPage() {
    const [budgets, setBudgets] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    

    const handleSearch = async () => {
        // try {
            const data = await getBudgetsReport(year);
            setBudgets(data);
        // } catch (error) {
        //     console.error("Error al buscar budgets:", error);
        // }
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
