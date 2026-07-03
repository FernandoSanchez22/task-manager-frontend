function Dashboard() {

    return (

        <div className="container mt-5">

            <h1>Dashboard</h1>

            <hr />

            <a className="btn btn-primary me-2" href="/tasks">
                Ver tareas
            </a>

            <a className="btn btn-success" href="/categories">
                Ver categorías
            </a>
            <br /><br />

<button
    className="btn btn-danger"
    onClick={() => {
        localStorage.removeItem("token");
        window.location = "/";
    }}
>
    Cerrar sesión
</button>

        </div>

    );

}

export default Dashboard;