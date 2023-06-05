import { TODOS_ACTION_TYPES } from './todos.types';

const TODOS_INITIAL_STATE = {
	todos: [],
};
export const todosReducer = (state = TODOS_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case TODOS_ACTION_TYPES.ADD_TODO: {
			return { ...state, todos: payload };
		}

		case TODOS_ACTION_TYPES.TOGGLE_TODO: {
			return {
				...state,
				todos: payload,
			};
		}

		case TODOS_ACTION_TYPES.CHANGE_TODO: {
			return {
				...state,
				todos: payload,
			};
		}

		case TODOS_ACTION_TYPES.DELETE_TODO: {
			return {
				...state,
				todos: payload,
			};
		}

		default: {
			return state;
		}
	}
};
