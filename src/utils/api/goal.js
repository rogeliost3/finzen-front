import fetchData from "./fetch.js";
/*
POST api/goal/create                crear un objetivo.                   {title, targetAmount, currentAmount, deadline}  
                                    Formato de fechas: YYYY-MM-DD  
PUT api/goal/income                 aportación a un objetivo             {idGoal, amount}  
GET api/goal/report                 reporte de los objetivos pasados  
                                    logrados y no logrados, y futuros  
                                    logrados y pendientes.  
PUT api/goal/:id/edit               edicion de un objetivo por id,       :id {title, targetAmount, currentAmount, deadline}  
DELETE api/goal/:id/remove 
*/

async function getGoalsReport() {
    const result = await fetchData("/goal/report", "GET");
    return result;
}

async function createGoal(goalData) {
    console.log("goalData: ", goalData);

    const { income, ...safeData } = goalData;
    safeData.currentAmount = 0;
    safeData.targetAmount = parseFloat(safeData.targetAmount);

    console.log("safeData: ", safeData);
    const result = await fetchData("/goal/create", "POST", safeData);
    return result;
}

async function editGoal(idGoal, goalData) {
    const { income, ...safeData } = goalData;
    safeData.currentAmount = 0;
    safeData.targetAmount = parseFloat(safeData.targetAmount);
    
    const result = await fetchData(`/goal/${idGoal}/edit`,"PUT", goalData);
    return result;
}

async function removeGoal(idGoal){
    const result = await fetchData(`/goal/${idGoal}/remove`,"DELETE")
    return result;
}

async function getAllGoals() {
    const result = await fetchData("/goal", "GET");
    return result;
}

export {
    getGoalsReport,
    createGoal,
    editGoal,
    removeGoal,
    getAllGoals
}