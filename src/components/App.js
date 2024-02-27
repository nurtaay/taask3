import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { TaskContextProvider } from '../context/TaskContext';
import { AuthProvider } from '../context/AuthContext';
import LoginForm from '../components/Auth/ LoginForm';
import RegistrationForm from '../components/Auth/RegistrationForm';


import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Features</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Pricing</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown link
                              </a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                  <li><a class="dropdown-item" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
        <TaskContextProvider>
          <h1>Task Manager</h1>
          <AddTaskForm />
          <TaskList />
        </TaskContextProvider>
          <AuthProvider>
              <div>
                  <h1>Login</h1>
                  <LoginForm />
                  <h1>Registration</h1>
                  <RegistrationForm />
              </div>
          </AuthProvider>
      </div>
  );
}

export default App;
