import React from 'react';

const Tarea = ({tarea, index, alternarTarea, eliminarTarea}) => {
    return (
        <li>
            <input 
            type="checkbox" 
            checked={tarea.completada} 
            onChange={() => alternarTarea(index)} />
            <span style={{textDecoration: tarea.completada ? 'line-through' : 'none'}}>
                {tarea.texto}</span>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
        </li>
    )
}

export default Tarea;