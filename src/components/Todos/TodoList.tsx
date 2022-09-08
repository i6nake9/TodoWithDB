import React from 'react';
import { Todo } from './Todo';
import styles from './TodoList.module.css';

export const TodoList = ({ todos, deleteTodo }: any) => {
	return (
		<div className={styles.todoListContainer}>
			{!todos.length ? (
				<h2>Todo list is empty</h2>
			) : (
				todos.map((todo: any, index: any) => (
					<Todo todo={todo} key={index} deleteTodo={deleteTodo} id={index} />
				))
			)}
		</div>
	);
};
