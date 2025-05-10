import fetchData from "./fetch.js";

async function getAllCategories(){
    const categories = await fetchData("/categories")
    return categories;
}


export {
    getAllCategories
}