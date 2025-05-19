import ConfirmDialog from "../../components/confirmDialog/ConfirmDialog";
import { removeUser } from "../../utils/api/user";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

//Componente de borrar de usuario.
//TODO: Comprobar que no es el propio admin quien se borra a si mismo!, no permitir ese caso.
function RemoveUser() {
  const { userData, onLogout } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = await removeUser(userData.idUser);
    if (result) {
      //TODO: mostrar pantalla con mensaje de despedida
      //TODO: Cambiar al sistema de autenticación con cookies
      onLogout(); 
    } 
    else
      setError(result);
  }

  return (
    <>
      (
        <ConfirmDialog
          title="Remove user"
          message="¿Are you sure?"
          confirmText="Yes, remove"
          cancelText="Cancel"
          onConfirm={handleDelete}
          onCancel={()=>{navigate("/")}}
        />
      )
    </>
  );
}

export default RemoveUser;
