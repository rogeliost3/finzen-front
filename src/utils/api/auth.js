import fetchData from "./fetch.js";

async function login(email, password){
    const bodyData = {
        email,
        password
    }
    try {
        const result = await fetchData("/login", "POST", bodyData);
        return result;
    } catch (error) {
        console.error("Error en login:", error);
        throw error; // O manejar el error de manera adecuada
    }
}

async function logout(){
    const result = await fetchData("/logout","POST");
}



export {
    login,
    logout,
}