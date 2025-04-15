const TodoCard = ({ todo, onEdit, onDelete }) => (
    <div className="bg-white shadow-md p-4 rounded flex justify-between items-start mb-3">
      <div>
        <h3 className="font-bold text-lg">{todo.title}</h3>
        <p className="text-sm">{todo.description}</p>
        <p className="text-xs text-gray-500">Due: {todo.dueDate?.split("T")[0]}</p>
        <p className="text-xs font-semibold">Category: {todo.category}</p>
      </div>
      <div className="space-x-2">
        <button className="text-blue-500" onClick={() => onEdit(todo)}>Edit</button>
        <button className="text-red-500" onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </div>
  );
  
  export default TodoCard;
  