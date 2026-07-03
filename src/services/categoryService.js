import api from "./api";

export const getCategories = async () => {

    const token = localStorage.getItem("token");

    return await api.get("/categories", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

};

export const createCategory = async (data) => {

    const token = localStorage.getItem("token");

    return await api.post("/categories", data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

};
export const deleteCategory = async (id) => {

    const token = localStorage.getItem("token");

    return await api.delete(`/categories/${id}`, {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

};
export const updateCategory = async (id, data) => {

    const token = localStorage.getItem("token");

    return await api.put(`/categories/${id}`, data, {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

};