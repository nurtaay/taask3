import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

function TaskContextProvider({ children }) {
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const addTask = (title) => {
        const newTask = {
            id: Math.random(),
            title,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskContextProvider };
