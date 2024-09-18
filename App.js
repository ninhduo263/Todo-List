import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    // Lấy dữ liệu từ localStorage khi trang được tải
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState(''); // Quản lý nhiệm vụ mới

  // Cập nhật localStorage mỗi khi danh sách nhiệm vụ thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Hàm thêm nhiệm vụ
  const addTodo = () => {
    if (newTodo.trim() === '') return; // Kiểm tra nếu ô trống
    const newTask = {
      id: Date.now(),
      text: newTodo,
    };
    setTodos([...todos, newTask]);
    setNewTodo(''); // Reset lại ô nhập liệu
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
