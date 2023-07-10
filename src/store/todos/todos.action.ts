import { TODOS_ACTION_TYPES, Todo } from './todos.types';

import {
	createAction,
	ActionWithPayload,
	// withMatcher,
} from '../../utils/reducer.utils';

export type UpdateTodo = ActionWithPayload<
	TODOS_ACTION_TYPES.UPDATE_TODO,
	Todo[]
>;

// export const updateTodo = withMatcher(
// 	(newTodo: Todo[]): UpdateTodo =>
// 		createAction(TODOS_ACTION_TYPES.UPDATE_TODO, newTodo)
// );

export const updateAddTodo = (todos: Todo[], newTodo: Todo): UpdateTodo => {
	const newTodos = [...todos, newTodo];
	return createAction(TODOS_ACTION_TYPES.UPDATE_TODO, newTodos);
};

export const updateToggleTodo = (todos: Todo[], newTodo: Todo): UpdateTodo => {
	const newTodos = todos.map((todo) => {
		if (todo.id === newTodo.id) {
			return { ...todo, completed: newTodo.completed };
		}
		return todo;
	});

	return createAction(TODOS_ACTION_TYPES.UPDATE_TODO, newTodos);
};

export const updateInputChange = (todos: Todo[], newTodo: Todo): UpdateTodo => {
	const newTodos = todos.map((todo) => {
		if (todo.id === newTodo.id) {
			return newTodo;
		} else {
			return todo;
		}
	});

	return createAction(TODOS_ACTION_TYPES.UPDATE_TODO, newTodos);
};

export const toDelete = (todos: Todo[], newTodoID: string): UpdateTodo => {
	const newTodos = todos.filter((todo) => todo.id !== newTodoID);
	return createAction(TODOS_ACTION_TYPES.UPDATE_TODO, newTodos);
};
