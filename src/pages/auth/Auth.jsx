import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import "./Auth.css";

// Página de autenticacion
function Auth() {

    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const { onLogin } = useContext(AuthContext);

    //Manejadores de entrada de datos
    const handleUserPassword = (event) => {
        const newPassword = event.target.value;
        const newState = { ...userData, password: newPassword }
        setUserData(newState);
    }
    const handleUserEmail = (event) => {
        const newEmail = event.target.value;
        const newState = { ...userData, email: newEmail }
        setUserData(newState);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await onLogin(userData.email, userData.password);
        setError(result);
    }

    return (
        <section className="auth-page">
            <section className="auth-section">
                <h1>Login</h1>
                <p className="error">{error}</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={userData.email}
                        onChange={handleUserEmail}
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={userData.password}
                        onChange={handleUserPassword}
                    />
                    <button type="submit">Acceder</button>
                </form>
            </section>
        </section>
    );
    
}

export default Auth;