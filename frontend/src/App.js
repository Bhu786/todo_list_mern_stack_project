// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Register from './Register';
// import Login from './Login';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TodoForm from "./pages/TodoForm";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<TodoForm />} />
          <Route path="/edit/:id" element={<TodoForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
