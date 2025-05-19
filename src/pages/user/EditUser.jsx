import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { editUser } from "../../utils/api/user";
import FormUser from "../user/FormUser";

function EditUser() {
  //obtener desde el contexto los datos de usuario y el metodo para actualizarlo
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  // const userInfo = useRouteLoaderData("formEditUser");

  const handleSubmit = async (formData) => {
    const result = await editUser(formData.idUser, formData);
    if (result) {
      setUserData(result);
      navigate("/", { replace: true, state: { data: result } }); //TODO: mostrar pagina con datos de perfil de usuario
    } else setError(result);
  };

  return (
    <FormUser
      onSubmit={handleSubmit}
      titleForm="Edit profile"
      titleButton="Save changes"
      error={error}
      initialData={userData}
    />
  );
}

export default EditUser;
