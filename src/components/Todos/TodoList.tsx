import React from 'react';
import { Todo } from './Todo';
import styles from './TodoList.module.css';

export const TodoList = (...todo: any) => {
	return (
		<div className={styles.todoListContainer}>
			{todo.map(() => (
				<Todo todo={todo.text} key={todo.id} deleteTodo={todo.deleteTodo} />
			))}
		</div>
	);
};
