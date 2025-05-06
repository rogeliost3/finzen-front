import fetchData from "./fetch.js";

async function login(email, password){
    const bodyData = {
        email,
        password
    }
    const result = await fetchData("/login","POST",bodyData);
    return result;
}

export {
    login
}