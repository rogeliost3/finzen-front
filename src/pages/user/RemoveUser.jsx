import ConfirmDialog from "../../components/confirmDialog/ConfirmDialog";
import { removeUser } from "../../utils/api/user";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function RemoveUser() {
  const { userData, onLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = await removeUser(userData.idUser);
    if (result) {
      onLogout();//TODO: mostrar pantalla con mensaje de despedida
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
