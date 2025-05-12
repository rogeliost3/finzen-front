import GoalPanel from "../../components/goal/GoalPanel.jsx";
import GoalList from "../../components/goal/GoalList.jsx";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { createGoal, editGoal, removeGoal } from "../../utils/api/goal.js";

function GoalPage() {
    const loadedGoals = useLoaderData(); // cargar los datos traidos desde el loader de routes
    const [goals, setGoals] = useState(loadedGoals); // convertirlos a mutables
    const [selected, setSelected] = useState(null); // saber si el card está seleccionado en la lista
    const [isNew, setIsNew] = useState(false);  // saber si al pulsar el boton Save Changes es una creacion o edicion
    const [income, setIncome] = useState(0);

    const handleSelect = (goal) => {
        setSelected(goal);
        setIncome(0);
        setIsNew(false);
        //presenta el boton Save Changes
        //presenta el boton Delete Goal
        //presenta el boton New Goal
        //presenta el boton Income
        //activar los campos
        //oculta campo income
        //oculta boton cancel
    };

    const handleNew = () => {
        setSelected({ title: "", targetAmount: 0, currentAmount: 0, deadline: "", income: 0 });
        setIsNew(true);
        //presenta el boton Save Changes
        //oculta el boton Delete Goal
        //oculta el boton New Goal
        //oculta el boton Income
        //oculta campo income
        //activar campos
        //presenta boton cancel
    };

    const handleIncome = () => {
        setSelected((prev) => ({ ...prev, income }));
        setIncome(0);
        //presenta el boton Save Changes
        //oculta el boton Delete Goal
        //oculta el boton New Goal
        //oculta el boton Income
        //activar boton cancel
        //desactivar campos menos income
        //presenta el campo income
    };

    const handleCancel = () => {
        if (isNew) {
            //ocultar el boton Save Changes
            //presenta el boton New Goal
            //ocultar boton cancel
            //borrar contenido campos (ya lo hace setSelected(null))
            //desactivar campos menos income
        } else { //Es un income
            //ocultar el boton Save Changes
            //presenta el boton New Goal
            //ocultar boton cancel
            //borrar contenido campos (ya lo hace setSelected(null))
            //oculta campo income
            //desactivar campos menos income
        }
        setSelected(null);
        setIsNew(false);
        setIncome("");
    }

    const handleSave = async () => {
        if (isNew) {
            const newGoal = await createGoal(selected);
            if (newGoal) {
                setGoals((prev) => [...prev, newGoal]);
                setSelected(newGoal);
                setIsNew(false);
                setIncome("");
                //presenta el boton Save Changes
                //presenta el boton Delete Goal
                //presenta el boton New Goal
                //presenta el boton Income
                //ocultar boton cancel
                //ocultar campo income
            }
        } else { 
            let updatedGoal;
            // if (//campo income visible es income) {
            //     updatedGoal = await income(selected.idUser, selected.idGoal, income);
            //     if (updatedGoal) {
            //         setGoals((prev) => prev.map((item) => (item.idGoal === selected.idGoal ? selected : item)));
            //         setIncome(0);
            //         //ocultar el campo income
            //         //activar campos
            //         //presenta boton save changes
            //         //presenta boton delete
            //         //presenta boton new
            //         //presenta el boton income
            //         //ocultar el boton cancel
            //     }
            // }
            //es modificacion
            updatedGoal = await editGoal(selected.idGoal, selected);
            if (updatedGoal) {
                setGoals((prev) => prev.map((item) => (item.idGoal === selected.idGoal ? selected : item)));
                setIsNew(false);
                setIncome("");
                //botones permanecen como estan
            }
        }
    };

    const handleDelete = async () => {
        if (!selected?.idGoal) return;
        const removedGoal = await removeGoal(selected.idGoal);
        console.log(removedGoal);
        if (removedGoal) {
            setGoals((prev) => prev.filter((item) => item.idGoal !== selected.idGoal));
            setSelected(null);
            setIsNew(false);
            setIncome("");
            //ocultar el boton Save Changes
            //presenta el boton New Goal
            //borrar contenido campos (ya lo hace setSelected(null))
            //oculta campo income
            //desactivar campos menos income
        }
    };

    return (
    <div className="goal-page-container">
        <GoalPanel 
        goalSelected={selected}
        onChange={setSelected}
        onSave={handleSave}
        onDelete={handleDelete}
        onNew={handleNew}
        onIncome={handleIncome}
        onCalcel={handleCancel}
        isNew={isNew}
        />
        <GoalList goals={goals} onSelect={handleSelect} idSelected={selected?.idGoal} />
    </div>
    );

}

export default GoalPage;