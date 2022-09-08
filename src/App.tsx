import React, { useState } from 'react';
import { TodoForm } from './components/Todos/TodoForm';
import { TodoList } from './components/Todos/TodoList';
import './App.css';

function App() {
	const [todos, setTodos]: any[] = useState([]);

	const deleteTodoHandler = (id: any) => {
		setTodos(todos.filter((_: any, idx: any) => idx !== id));
	};

	const addTodoHandler = (text: any) => {
		setTodos([...todos, text]);
	};

	return (
		<div className="App">
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} deleteTodo={deleteTodoHandler} />
		</div>
	);
}

export default App;
