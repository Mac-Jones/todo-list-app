import { TODOS_ACTION_TYPES } from './todos.types';

import { createAction } from '../../utils/reducer';

export const updateAddTodo = (todos, newTodo) => {
	const newTodos = [...todos, newTodo];
	return createAction(TODOS_ACTION_TYPES.ADD_TODO, newTodos);
};

export const updateToggleTodo = (todos, newTodo) => {
	const newTodos = todos.map((todo) => {
		if (todo.id === newTodo.id) {
			return { ...todo, completed: newTodo.completed };
		}
		return todo;
	});

	return createAction(TODOS_ACTION_TYPES.TOGGLE_TODO, newTodos);
};

export const updateInputChange = (todos, newTodo) => {
	const newTodos = todos.map((todo) => {
		if (todo.id === newTodo.id) {
			return newTodo;
		} else {
			return todo;
		}
	});

	return createAction(TODOS_ACTION_TYPES.CHANGE_TODO, newTodos);
};

export const toDelete = (todos, newTodoID) => {
	const newTodos = todos.filter((todo) => todo.id !== newTodoID);
	return createAction(TODOS_ACTION_TYPES.DELETE_TODO, newTodos);
};
