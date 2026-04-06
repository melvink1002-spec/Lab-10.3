import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      )}
      <div>
        <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;