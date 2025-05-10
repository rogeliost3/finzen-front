import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../utils/api/user";
import FormUser from "../user/formUser";

function EditUser() {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result=await createUser(userData);
        if (result)
            navigate("/user/edit",{replace:true, state:{data:result}})
        else
            setError(result);
    }

    return (<FormUser handleSubmit={handleSubmit} titleForm="New user" titleButton="Create new user" error= {error}/>)
}

export default EditUser;