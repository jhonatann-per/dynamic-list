// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Função para listar tarefas
export const getTasks = async () => {
    const response = await axios.get(`${API_URL}/listTasks`);
    return response.data.tarefas; // Certifique-se de que o backend retorna 'tarefas'
};

// Função para criar uma tarefa
export const createTask = async (task) => {
    const response = await axios.post(`${API_URL}/createTask`, task);
    return response.data;
};

// Função para atualizar uma tarefa
export const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`${API_URL}/updateTask/${id}`, updatedTask);
    return response.data;
};

// Função para deletar uma tarefa
export const deleteTask = async (id) => {
    const response = await axios.delete(`${API_URL}/deleteTask/${id}`);
    return response.data;
};