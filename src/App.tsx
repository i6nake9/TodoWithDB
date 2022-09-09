import React, { useState } from 'react';
import { TodoForm } from './components/Todos/TodoForm';
import { TodoList } from './components/Todos/TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
	const [todos, setTodos]: any[] = useState([]);

	const deleteTodoHandler = (id: any) => {
		setTodos(todos.filter((todo: any): any => todo.id !== id));
	};

	const addTodoHandler = (text: any) => {
		const newTodo = {
			text: text,
			isComleted: false,
			id: uuidv4(),
		};
		setTodos([...todos, newTodo]);
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
