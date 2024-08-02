import React from 'react';
import Tarea from '../Tarea/Tarea';

const ListaTareas = ({ tareas, alternarTarea, eliminarTarea }) => {
    return (
        <ul>
            {tareas.map((tarea, index) => (
                <Tarea 
                key={index} 
                tarea={tarea} 
                index={index}
                alternarTarea={alternarTarea} 
                eliminarTarea={eliminarTarea} 
                />
            ))}
        </ul>
    )
}

export default ListaTareas;