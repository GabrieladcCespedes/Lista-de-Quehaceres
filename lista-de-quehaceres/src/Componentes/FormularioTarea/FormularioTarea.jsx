import React, { useState} from "react";

const FormularioTarea = ({agregarTarea}) => {
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarTarea(nuevaTarea);
        setNuevaTarea("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text" 
            value={nuevaTarea} 
            onChange={(e) => setNuevaTarea(e.target.value)}/>
            <button type="sebmit">Agregar</button>
        </form>
    )
}

export default FormularioTarea;
