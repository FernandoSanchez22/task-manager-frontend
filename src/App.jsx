import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Tasks from "./pages/tasks";
import Categories from "./pages/categories";
function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/tasks" element={<Tasks />} />

                <Route path="/categories" element={<Categories />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;