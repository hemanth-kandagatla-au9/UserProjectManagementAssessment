import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProjectList from './pages/ProjectList';
import CreateProj from './pages/createProj';
import CreateTask from './pages/createTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
          <Route path="/projectlist" element={<ProjectList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createproj" element={<CreateProj />} />
          <Route path="/createtask" element={<CreateTask />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
