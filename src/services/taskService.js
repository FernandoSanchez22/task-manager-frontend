import api from "./api";

export const getTasks = async () => {

    const token = localStorage.getItem("token");

    return await api.get("/tasks", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

};
export const createTask = async (data) => {

    const token = localStorage.getItem("token");

    return await api.post("/tasks", data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    

};

export const deleteTask = async (id) => {

    const token = localStorage.getItem("token");

    return await api.delete(`/tasks/${id}`, {

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

};
export const updateTask = async (id, data) => {

    const token = localStorage.getItem("token");

    return await api.put(`/tasks/${id}`, data, {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

};