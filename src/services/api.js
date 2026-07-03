import axios from "axios";

const api = axios.create({
    baseURL: "https://task-manager-backend-5-3r8u.onrender.com/api"
});

export default api;