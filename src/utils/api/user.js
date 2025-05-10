import fetchData from "./fetch.js";

/* obtiene name, idUser y isAdmin del usuario logueado 
que se guardan en userData, proveidos por la API */
async function getUserInfo() {
    const result = await fetchData("/user-info");
    return result;
}

//obtiene datos de un usuario por su id
async function getUserById(idUser){
    const result = await fetchData(`/user/${idUser}`)
    return result;
}

async function createUser(userData) {
    const result = await fetchData("/register", "POST", userData);
    return result;
}
async function editUser(idUser, userData) {
    console.log("users:editUser:", idUser, userData);
    const result = await fetchData("/user/" + idUser + "/edit", "PUT", userData);
    return result;
}

async function removeUser(idUser){
    const result = await fetchData(`/user/${idUser}/remove`,"DELETE")
    return result;
}
/*
async function getAllProducts(){
    const products = await fetchData("/product")
    return products;
}

async function getProductById(id){
    const product = await fetchData(`/product/${id}`)
    return product;
}

*/
export { getUserInfo, getUserById, createUser, editUser, removeUser }