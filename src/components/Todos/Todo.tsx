import React from 'react';
import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

export const Todo = (...todo: any) => {
	return (
		<div
			className={styles.todo}
			onDoubleClick={() => {
				todo.deleteTodo(todo.id);
			}}
		>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{todo.text}</div>
		</div>
	);
};
