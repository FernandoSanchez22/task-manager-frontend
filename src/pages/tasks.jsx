import { useEffect, useState } from "react";
import {
    getTasks,
    createTask,
    deleteTask,
    updateTask
} from "../services/taskService";

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [editando, setEditando] = useState(null);
    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const res = await getTasks();
        setTasks(res.data);
    };
    const crearTask = async () => {

    try {

        await createTask({

            titulo,

            descripcion,

            estado: "Pendiente"

        });

        setTitulo("");
        setDescripcion("");

        loadTasks();

    } catch (error) {

        alert(error.response.data.message);

    }

};
    const eliminarTask = async (id) => {

    try {

        await deleteTask(id);

        loadTasks();

    } catch (error) {

        alert(error.response.data.message);

    }

};
    const editarTask = async (task) => {

    setTitulo(task.titulo);

    setDescripcion(task.descripcion);

    setEditando(task._id);

};
    const guardarEdicion = async () => {

    try {

        await updateTask(editando, {

            titulo,
            descripcion

        });

        setTitulo("");
        setDescripcion("");

        setEditando(null);

        loadTasks();

    } catch (error) {

        alert(error.response.data.message);

    }

};
    return (
        <div className="container mt-5">

            <h1>Mis tareas</h1>
            <input
    className="form-control mb-2"
    placeholder="Título"
    value={titulo}
    onChange={(e) => setTitulo(e.target.value)}
/>

<textarea
    className="form-control mb-2"
    placeholder="Descripción"
    value={descripcion}
    onChange={(e) => setDescripcion(e.target.value)}
/>

{
    editando ? (

        <button
            className="btn btn-warning mb-3"
            onClick={guardarEdicion}
        >
            Guardar cambios
        </button>

    ) : (

        <button
            className="btn btn-success mb-3"
            onClick={crearTask}
        >
            Crear tarea
        </button>

    )
}
            {
                tasks.map(task => (

                    <div className="card p-3 mb-3" key={task._id}>

                        <h4>{task.titulo}</h4>

                        <p>{task.descripcion}</p>

                        <strong>{task.estado}</strong>
                        <br />

<button
    className="btn btn-danger mt-2"
    onClick={() => eliminarTask(task._id)}
>

    Eliminar

</button>

<br />

<button
    className="btn btn-warning mt-2 ms-2"
    onClick={() => editarTask(task)}
>
    Editar
</button>
                    </div>

                ))
            }

        </div>
    );
}

export default Tasks;