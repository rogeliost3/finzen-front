import { getToken } from "../localStorage";
const BASE_URL = "http://localhost:3000/api";

async function fetchData(route, method = "GET", bodyData = null) {
    const url = BASE_URL + route;

    //obtiene el token del usuario logeado
    const token = getToken();
    const options = {
        method: method,
        headers: {"Content-Type":"application/json"}
    };
    if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
    }
    if (bodyData) {
        options.body = JSON.stringify(bodyData);
    }
    const response = await fetch(url, options);
    const responseData = await response.json();
    if (!response.ok) {
          // Lanza un error con los detalles
        throw {
        status: response.status,
        message: responseData.message || "Error en la petición de login"    
        };
    }
    return responseData;
}

export default fetchData;