import React, { useState } from 'react';
import styles from './TaskForm.module.css';

export const TaskForm = ({ onSubmit, initialTask }) => {
    const [task, setTask] = useState(initialTask || { titulo: '', descricao: '', status: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        setTask({ titulo: '', descricao: '', status: '' });
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
