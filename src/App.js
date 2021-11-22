import React from 'react';
import './App.css';
import TodoList from './components/TodoList';


// Source Code: https://youtu.be/E1E08i2UJGI

function App() {
  return (
    <div className="todo-app">
      <h1>Teux Deux Task Manager App</h1> 
      <TodoList />     
    </div>
  );
}

export default App;
