import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function AddTaskForm() {
    const [title, setTitle] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTask(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;
