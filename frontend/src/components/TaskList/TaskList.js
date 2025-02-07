import React, { useState, useEffect } from 'react';
import { Task } from '../Task/Task';
import { TaskForm } from '../TaskForm/TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from '../../services/api';
import styles from './TaskList.module.css';

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const tasks = await getTasks();
            console.log('Tarefas recebidas:', tasks);
            setTasks(tasks);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
        }
    };

    const handleAddTask = async (task) => {
        try {
            await createTask(task);
            fetchTasks();
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
        }
    };

    const handleEditTask = async (task, updatedTask) => {
        try {
            await updateTask(updatedTask.id, updatedTask);
            setEditingTask(null);
            fetchTasks();
        } catch (error) {
            console.error('Erro ao editar tarefa:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
        }
    };

    const handleMoveTask = async (id, status) => {
        const task = tasks.find((t) => t.id === id);
        if (task) {
            await updateTask(id, { ...task, status });
            fetchTasks();
        }
    };

    const filterTasksByStatus = (status) => {
        return tasks.filter((task) => task.status === status);
    };

    return (
        <div className={styles.container}>
            <div className={styles.taskList}>
                <div className={styles.column}>
                    <h2>Pendente</h2>
                    {filterTasksByStatus('Pendente').map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={handleDeleteTask}
                            onEdit={setEditingTask}
                            onMove={handleMoveTask}
                        />
                    ))}
                </div>
                <div className={styles.column}>
                    <h2>Em andamento</h2>
                    {filterTasksByStatus('Em andamento').map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={handleDeleteTask}
                            onEdit={setEditingTask}
                            onMove={handleMoveTask}
                        />
                    ))}
                </div>
                <div className={styles.column}>
                    <h2>Feito</h2>
                    {filterTasksByStatus('Feito').map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={handleDeleteTask}
                            onEdit={setEditingTask}
                            onMove={handleMoveTask}
                        />
                    ))}
                </div>
                <div className={styles.taskForm}>
                    <h2>{editingTask ? 'Editar Tarefa' : 'Adicionar Tarefa'}</h2>
                    <TaskForm
                        onSubmit={editingTask ? handleEditTask : handleAddTask}
                        initialTask={editingTask}
                    />
                </div>
            </div>
        </div>
    );
};
