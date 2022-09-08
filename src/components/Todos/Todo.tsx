import React from 'react';
import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

export const Todo = ({ todo, deleteTodo, id }: any) => {
	return (
		<div
			className={styles.todo}
			onDoubleClick={() => {
				deleteTodo(id);
			}}
		>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{todo}</div>
		</div>
	);
};
