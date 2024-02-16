import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { TaskContextProvider } from '../context/TaskContext';
import '../App.css';

function App() {
  return (
      <div className="App">
        <TaskContextProvider>
          <h1>Task Manager</h1>
          <AddTaskForm />
          <TaskList />
        </TaskContextProvider>
      </div>
  );
}

export default App;
