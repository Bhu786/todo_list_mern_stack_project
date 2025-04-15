import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const TodoForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "", description: "", dueDate: "", category: "Urgent"
  });
  const navigate = useNavigate();
  const { user } = useAuth();

  const fetchTodo = async () => {
    const res = await axios.get("/api/todos", {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    const todo = res.data.find(t => t._id === id);
    if (todo) setForm(todo);
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (id) {
      await axios.put(`/api/todos/${id}`, form, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
    } else {
      await axios.post("/api/todos", form, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
    }
    navigate("/dashboard");
  };

  useEffect(() => {
    if (id) fetchTodo();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">{id ? "Edit Todo" : "Create Todo"}</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Title" name="title" value={form.title} onChange={handleChange} required />
        <Input label="Description" name="description" value={form.description} onChange={handleChange} />
        <Input label="Due Date" type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
        <div className="mb-4">
          <label className="block mb-1">Category</label>
          <select name="category" value={form.category} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option value="Urgent">Urgent</option>
            <option value="Non-Urgent">Non-Urgent</option>
          </select>
        </div>
        <Button type="submit">{id ? "Update" : "Create"}</Button>
      </form>
    </div>
  );
};

export default TodoForm;
