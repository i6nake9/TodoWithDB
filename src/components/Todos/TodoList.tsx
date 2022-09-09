import React from 'react';
import { Todo } from './Todo';
import styles from './TodoList.module.css';

export const TodoList = ({ todos, deleteTodo }: any) => {
	return (
		<div className={styles.todoListContainer}>
			{!todos.length
				? 'Todo list is empty'
				: todos.map((todo: any) => (
						<Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
				  ))}
		</div>
	);
};
