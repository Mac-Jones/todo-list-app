import { AnyAction } from 'redux';
import { Todo, TODOS_ACTION_TYPES } from './todos.types';
// import {
// 	updateAddTodo,
// 	updateToggleTodo,
// 	updateInputChange,
// 	toDelete,
// } from './todos.action';

export type TodosState = {
	readonly todos: Todo[];
};

const TODOS_INITIAL_STATE: TodosState = {
	todos: [],
};

export const todosReducer = (
	state = TODOS_INITIAL_STATE,
	action: AnyAction
) => {
	// if (
	// 	updateToggleTodo.match(action) ||
	// 	updateAddTodo.match(action) ||
	// 	updateInputChange.match(action) ||
	// 	toDelete.match(action)
	// ) {
	// 	return { ...state, todos: action.payload };
	// }

	// return state;

	switch (action.type) {
		case TODOS_ACTION_TYPES.UPDATE_TODO: {
			return { ...state, todos: action.payload };
		}

		default: {
			return state;
		}
	}
};
