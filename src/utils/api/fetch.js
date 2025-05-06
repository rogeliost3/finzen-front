import { getToken } from "../localStorage";
const BASE_URL = "http://localhost:3000/api";

async function fetchData(route, method = "GET", bodyData = null) {
    const url = BASE_URL + route;

    //obtiene el token del usuario logeado
    const token = getToken();
    const options = {
        method: method,
        headers: {}
    };
    if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
    }
    if (bodyData) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(bodyData);
    }
    const response = await fetch(url, options);
    const responseData = await response.json();
    if (!response.ok) {
        responseData.status = response.status;
    }
    return responseData;
}

export default fetchData;