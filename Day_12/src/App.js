import { useState, useEffect } from "react";

function TodoApp() {
  const API_URL = "https://demofornow.pythonanywhere.com/todos";

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Fetch todos from backend
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  // Add new todo
  const addTodo = () => {
    if (!task.trim()) return;

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: task }),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
        setTask("");
      })
      .catch((err) => console.error("Error adding todo:", err));
  };

  // Toggle todo (mark complete/incomplete)
  const toggleTodo = (id, completed, title) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: !completed }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setTodos(todos.map((t) => (t.id === id ? updated : t)));
      })
      .catch((err) => console.error("Error updating todo:", err));
  };

  // Delete todo
  const deleteTodo = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        setTodos(todos.filter((t) => t.id !== id));
      })
      .catch((err) => console.error("Error deleting todo:", err));
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#1e1e2f",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🚀 To-Do List</h2>

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "#2c2c44",
            color: "#fff",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            background: "#4cafef",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 14px",
              marginBottom: "10px",
              borderRadius: "8px",
              background: todo.completed ? "#2e5034" : "#2c2c44",
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#9ccc9c" : "#fff",
              transition: "0.3s",
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id, todo.completed, todo.title)}
              style={{ cursor: "pointer", flex: 1 }}
            >
              {todo.title}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                marginLeft: "10px",
                border: "none",
                background: "transparent",
                color: "#ff5f5f",
                fontSize: "18px",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
