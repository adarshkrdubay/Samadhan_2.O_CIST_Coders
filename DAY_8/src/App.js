import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
              background: todo.done ? "#2e5034" : "#2c2c44",
              textDecoration: todo.done ? "line-through" : "none",
              color: todo.done ? "#9ccc9c" : "#fff",
              transition: "0.3s",
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: "pointer", flex: 1 }}
            >
              {todo.text}
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
