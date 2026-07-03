import { useEffect, useState } from "react";
import {
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory
} from "../services/categoryService";

function Categories() {

    const [categories, setCategories] = useState([]);
    const [nombre, setNombre] = useState("");
    const [editando, setEditando] = useState(null);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        const res = await getCategories();
        setCategories(res.data);
    };
    const crearCategoria = async () => {

    try {

        await createCategory({

            nombre

        });

        setNombre("");

        loadCategories();

    } catch (error) {

        alert(error.response.data.message);

    }

};
    const eliminarCategoria = async (id) => {

    try {

        await deleteCategory(id);

        loadCategories();

    } catch (error) {

        alert(error.response.data.message);

    }

};
    const editarCategoria = (category) => {

    setNombre(category.nombre);

    setEditando(category._id);

};
    const guardarEdicion = async () => {

    try {

        await updateCategory(editando, {

            nombre

        });

        setNombre("");

        setEditando(null);

        loadCategories();

    } catch (error) {

        alert(error.response.data.message);

    }

};
    return (
        <div className="container mt-5">
            <h1>Categorías</h1>
                <input
    
    className="form-control mb-2"
    placeholder="Nombre de la categoría"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}

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
            className="btn btn-primary mb-3"
            onClick={crearCategoria}
        >
            Crear categoría
        </button>

    )
}


            {
                categories.map(category => (
                    <div className="card p-3 mb-2" key={category._id}>
                        {category.nombre}
                        <br />

<button
    className="btn btn-danger mt-2"
    onClick={() => eliminarCategoria(category._id)}
>
    Eliminar
</button>



<button
    className="btn btn-warning mt-2 ms-2"
    onClick={() => editarCategoria(category)}
>
    Editar
</button>
 
                    </div>
                ))
            }
        </div>
    );
}

export default Categories;