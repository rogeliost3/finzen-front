import { useState } from "react";
import { useNavigate,useRouteLoaderData } from "react-router-dom";


function FormUser({onSubmit, titleForm, titleButton, error}) {

    //Este componente de React no genera error si se pasa undefined
    const data = useRouteLoaderData("formEditUser");

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: data?.name || "",
        email: data?.email || "",
        password: "",// TODO: poner oldPassword y newPassword
    });

    const handleChange =(e) => {
        setUserData({
             ...userData,
             [e.target.name]: e.target.value
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(userData); // ✅ aquí se pasan los datos al padre
    };

    return (
        <section className="auth-section">
            <h1>{titleForm}</h1>
            {error && <p className="error">{error}</p>}
            <form className="login-form" onSubmit={handleFormSubmit}>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                />               
                <label htmlFor="email">Your email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Enter password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
                <button>{titleButton}</button>
            </form>
        </section>
    );
}

export default FormUser;