// export const todosReducer = (state, action) => {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case 'added': {
// 			return { ...state, todos: payload };
// 		}

// 		case 'toggle': {
// 			return {
// 				...state,
// 				todos: payload,
// 			};
// 		}

// 		case 'changed': {
// 			return {
// 				...state,
// 				todos: payload,
// 			};
// 		}

// 		case 'deleted': {
// 			return {
// 				...state,
// 				todos: payload,
// 			};
// 		}

// 		default: {
// 			throw new Error(`Unhandled type ${type} in todosReducer`);
// 		}
// 	}
// };
