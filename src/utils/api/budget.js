import fetchData from "./fetch.js";

async function getBudgetsReport(year){
    const budgets = await fetchData(`/budget/report/${year}`,"GET", null);
    return budgets;
}

async function createBudget(budgetData) {
    budgetData.limitAmount = parseFloat(budgetData.limitAmount);
    const { idCategory, limitAmount, month } = budgetData;
    const result = await fetchData("/budget/create", "POST",{idCategory, limitAmount, month});
    return result;
}

export {
    createBudget,
    getBudgetsReport
}