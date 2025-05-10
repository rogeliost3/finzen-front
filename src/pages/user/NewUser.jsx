import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../utils/api/user";
import FormUser from "../user/formUser";

function NewUser() {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    
    const handleSubmit = async (userData) => {
        const result=await createUser(userData);
        if (result)
            navigate("/login",{replace:true, state:{data:result}})
        else
            setError(result);
    }

    return (<FormUser onSubmit={handleSubmit} titleForm={"New user"} titleButton={"Create new user"} error= {error}/>)
}

export default NewUser;