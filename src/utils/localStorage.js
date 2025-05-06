
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const result = localStorage.getItem(key);
    if (!result) return null;
    try {
      return JSON.parse(result);
    } catch (err) {
        console.error("Error parsing JSON from localStorage:", err);
      return null;
    }
}

function removeFromLocalStorage(key){
    localStorage.removeItem(key);
}

function saveToken(token) {
    saveToLocalStorage("token", token);
}

function getToken(){
    return getFromLocalStorage("token");
}

function removeToken(){
    removeFromLocalStorage("token");
}

export {
    saveToken,
    getToken,
    removeToken
}