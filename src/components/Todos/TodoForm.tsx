import React, { useState } from 'react';
import styles from './TodoForm.module.css';

export const TodoForm = ({ addTodo }: any) => {
	const [text, setText] = useState('');

	const onSubmitHandler = (event: any) => {
		event.preventDefault();
		addTodo(text);
		setText('');
	};

	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input
					placeholder="Enter new todo"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button type="submit">Submit </button>
			</form>
		</div>
	);
};
