import { AnyAction } from 'redux';
import { Todo, TODOS_ACTION_TYPES } from './todos.types';

export type TodosState = {
	readonly todos: Todo[];
};

export const TODOS_INITIAL_STATE: TodosState = {
	todos: [],
};

export const todosReducer = (
	state = TODOS_INITIAL_STATE,
	action: AnyAction
) => {
	switch (action.type) {
		case TODOS_ACTION_TYPES.UPDATE_TODO: {
			return { ...state, todos: action.payload };
		}

		default: {
			return state;
		}
	}
};
