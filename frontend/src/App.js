import React, { useState, useEffect } from 'react';
 
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
 
  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
 
  const addTodo = () => {
    fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo }),
    })
      .then((response) => response.json())
      .then((todo) => setTodos([...todos, todo]));
    setNewTodo('');
  };
 
  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' })
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };
 
  return (
<div>
<h1>To-Do App</h1>
<input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
      />
<button onClick={addTodo}>Add</button>
<ul>
        {todos.map((todo) => (
<li key={todo.id}>
            {todo.title} <button onClick={() => deleteTodo(todo.id)}>Delete</button>
</li>
        ))}
</ul>
</div>
  );
};
 
export default App;
