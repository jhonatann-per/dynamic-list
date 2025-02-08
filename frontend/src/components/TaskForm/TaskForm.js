import React, { useState, useEffect } from 'react';
import styles from './TaskForm.module.css';

export const TaskForm = ({ onSubmit, initialTask }) => {
    // Estado interno para armazenar os dados da tarefa
    const [task, setTask] = useState({ titulo: '', descricao: '', status: 'Pendente' });

    // Atualiza o estado interno quando initialTask muda
    useEffect(() => {
        if (initialTask) {
            setTask(initialTask);
        } else {
            setTask({ titulo: '', descricao: '', status: 'Pendente' });
        }
    }, [initialTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task); // Envia a tarefa para o onSubmit (handleAddTask ou handleEditTask)
        if (!initialTask) {
            // Limpa o formulário se for uma nova tarefa
            setTask({ titulo: '', descricao: '', status: 'Pendente' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.taskForm}>
            <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={task.titulo}
                onChange={handleChange}
                required
                className={styles.input}
            />
            <textarea
                name="descricao"
                placeholder="Descrição"
                value={task.descricao}
                onChange={handleChange}
                required
                className={styles.textarea}
            />
            <select
                name="status"
                value={task.status}
                onChange={handleChange}
                required
                className={styles.select}
            >
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Feito">Feito</option>
            </select>
            <button type="submit" className={styles.button}>
                {initialTask ? 'Atualizar' : 'Adicionar'}
            </button>
        </form>
    );
};