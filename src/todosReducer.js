export default function todosReducer(todos, action) {
	switch (action.type) {
		case 'added': {
			return [
				...todos,
				{ id: action.id, title: action.title, completed: action.completed },
			];
		}

		case 'toggle': {
			return todos.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, completed: action.completed };
				}
				return todo;
			});
		}

		case 'changed': {
			return todos.map((todo) => {
				if (todo.id === action.todo.id) {
					return action.todo;
				} else {
					return todo;
				}
			});
		}

		case 'deleted': {
			return todos.filter((todo) => todo.id !== action.id);
		}

		default: {
			return todos;
		}
	}
}
