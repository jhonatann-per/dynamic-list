import React from 'react';
import { TaskList } from './components/TaskList/TaskList';
import './global.css';

export const App = () => {
    return (
        <div className="App">
            <TaskList />
        </div>
    );
}

