import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

function FormUser({onSubmit, titleForm, titleButton, error, initialData}) {

    //Este componente de React no genera error si se pasa undefined
    // const { userData } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log("FormUser:initialData: ",initialData);
    const [formData, setformData] = useState({
        idUser: initialData?.idUser || 0,
        name: initialData?.name || "",
        email: initialData?.email || "",
        password: "", // TODO: poner oldPassword y newPassword
    });

    const handleChange =(e) => {
        console.log("FormUser:formData: ", formData);
        setformData({
             ...formData,
             [e.target.name]: e.target.value
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("FormUser:formData to submit: ", formData);
        onSubmit(formData); 
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                />               
                <label htmlFor="email">Your email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {/* TODO: poner oldPassword y newPassword y 
                    TODO: crear endpoint de cambio de password en API */}
                <label htmlFor="password">Enter password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button>{titleButton}</button>
            </form>
        </section>
    );
}

export default FormUser;