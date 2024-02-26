import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskItem({ task }) {
    const { deleteTask, toggleTask } = useContext(TaskContext);

    return (
        <div>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <textarea className={'title'}>{task.title}</textarea>
            <button className={'delete-button'} onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
