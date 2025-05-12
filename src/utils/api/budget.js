import fetchData from "./fetch.js";

async function getBudgetsReport(year){
    const budgets = await fetchData(`/budget/report/${year}`,"GET", null);
    return budgets;
}

async function createBudget(budgetData) {
    budgetData.limitAmount = parseFloat(budgetData.limitAmount);
    const { idCategory, limitAmount, month } = budgetData;
        console.log("budgetData: ", budgetData);
        console.log("idCategory: ", idCategory);
        console.log("limitAmount: ", limitAmount);
        console.log("month: ", month);

    const result = await fetchData("/budget/create", "POST",{idCategory, limitAmount, month});
    // if (!result) {
    //     throw new Error("Error al crear el presupuesto");
    // }
    return result;
}
/*
async function editBudget(idUser, idBudget, budgetData) {
    const budget = await getByID(idUser, idBudget);

    if (!budget) {
        throw new Errors.NotFound();
    }
    await Budget.update(
        {
            idCategory: budgetData.idCategory,
            limitAmount: budgetData.limitAmount,
            month: budgetData.month
        },
        {
            where: {
                idBudget: idBudget,
                idUser
            }
        }
    )

    const updatedBudget = await Budget.findByPk(budget.idBudget);
    return {
        idUser: updatedBudget.idUser,
        idbudget: updatedBudget.idbudget,
        idCategory: updatedBudget.idCategory,
        limitAmount: updatedBudget.limitAmount,
        month: updatedBudget.month
    };
}

async function removeBudget(idUser, idBudget) {
    const budget = await getByID(idUser, idBudget);
    if (!budget) {
        throw new Errors.NotFound();
    }
    const response = await Budget.destroy({
        where: {
            idBudget: idBudget
        }
    });
    return response > 0;
}
*/
export {
    createBudget,
    getBudgetsReport
    /*edit,
    remove,*/
}