import React, {useState, useEffect} from 'react';
//import Tarea from '../Tarea/Tarea';
import ListaTareas from '../ListaTareas/ListaTareas';
import FormularioTarea from '../FormularioTarea/FormularioTarea';
import './App.css';

const App = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
        if (tareasGuardadas) {
        setTareas(tareasGuardadas);
    }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = (nuevaTarea) => {
        if (nuevaTarea.trim() === '') return;
        const tarea = {
            texto: nuevaTarea,
            completada: false,
        };
        setTareas([...tareas, tarea]);
        };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    const alternarTarea = (index) => {
        const nuevasTareas = tareas.map((tarea, i) => {
        if (i === index) {
            return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
        });
        setTareas(nuevasTareas);
    };

    return (
        <div className="App">
        <h1>Lista de Tareas</h1>
        <FormularioTarea agregarTarea={agregarTarea} />
        <ListaTareas tareas={tareas} alternarTarea={alternarTarea} eliminarTarea={eliminarTarea} />
        </div>
    );
}

export default App;