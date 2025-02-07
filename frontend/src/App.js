// src/App.js
import React from 'react';
import { TaskList } from './components/TaskList/TaskList';
import './App.css';

export const App = () => {
    return (
        <div className="App">
            <h1>Controle de Tarefas</h1>
            <TaskList />
        </div>
    );
}

