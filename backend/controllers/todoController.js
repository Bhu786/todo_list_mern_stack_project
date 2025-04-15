import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.userId }).sort({ createdAt: -1 });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const { title, description, dueDate, category } = req.body;
  const todo = new Todo({ title, description, dueDate, category, user: req.userId });
  await todo.save();
  res.status(201).json(todo);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findOneAndUpdate({ _id: id, user: req.userId }, req.body, { new: true });
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const result = await Todo.findOneAndDelete({ _id: id, user: req.userId });
  if (!result) return res.status(404).json({ message: "Todo not found" });
  res.json({ message: "Todo deleted" });
};
