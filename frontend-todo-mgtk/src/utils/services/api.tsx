'use client';

import axios from "axios";

const api = axios.create({
    baseURL: "https://my-todo-list-43hl.onrender.com",
});

api.interceptors.request.use(async config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
})

export default api;