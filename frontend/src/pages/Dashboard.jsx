import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoCard from "../components/TodoCard";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import LogoutButton from "../components/logout";
import Register from "./Register";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const fetchTodos = async () => {
    const res = await axios.get("/api/todos", {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    setTodos(res.data);
  };

  const handleDelete = async id => {
    if (confirm("Are you sure you want to delete?")) {
      await axios.delete(`/api/todos/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      fetchTodos();
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">My Todos</h2>
        <Register/>
        <div className="space-x-2">
          <Button onClick={() => navigate("/create")}>+ Add Todo</Button>
          {/* <Button onClick={logout}>Logout</Button> */}
          <LogoutButton/>
        </div>
      </div>
      {todos.map(todo => (
        <TodoCard key={todo._id} todo={todo} onEdit={() => navigate(`/edit/${todo._id}`)} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Dashboard;
