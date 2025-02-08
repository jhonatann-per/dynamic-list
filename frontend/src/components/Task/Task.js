import React from 'react';
import styles from './Task.module.css'
export const Task = ({ task, onDelete, onEdit, onMove }) => {
    return (
        <div className={styles.task}>
            <h3>{task.titulo}</h3>
            <p>{task.descricao}</p>
            <button onClick={() => onEdit(task)}>Editar</button> 
            <button onClick={() => onDelete(task.id)}>Excluir</button>
            <select value={task.status} onChange={(e) => onMove(task.id, e.target.value)}>
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Feito">Feito</option>
            </select>
        </div>
    );
};
