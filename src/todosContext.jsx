// import { createContext, useReducer } from 'react';

// import { todosReducer } from './todosReducer';

// export const TodosContext = createContext(null);

// const initialValue = {
// 	todos: [],
// };

// const TodosProvider = ({ children }) => {
// 	const [{ todos }, dispatch] = useReducer(todosReducer, initialValue);

// 	const updateAddTodo = (newTodo) => {
// 		const newTodos = [...todos, newTodo];
// 		dispatch({ type: 'added', payload: newTodos });
// 	};

// 	const updateToggleTodo = (newTodo) => {
// 		const newTodos = todos.map((todo) => {
// 			if (todo.id === newTodo.id) {
// 				return { ...todo, completed: newTodo.completed };
// 			}
// 			return todo;
// 		});

// 		dispatch({ type: 'toggle', payload: newTodos });
// 	};

// 	const updateInputChange = (newTodo) => {
// 		const newTodos = todos.map((todo) => {
// 			if (todo.id === newTodo.id) {
// 				return newTodo;
// 			} else {
// 				return todo;
// 			}
// 		});

// 		dispatch({ type: 'changed', payload: newTodos });
// 	};

// 	const toDelete = (newTodoID) => {
// 		const newTodos = todos.filter((todo) => todo.id !== newTodoID);
// 		dispatch({ type: 'deleted', payload: newTodos });
// 	};

// 	const value = {
// 		todos,
// 		updateToggleTodo,
// 		updateInputChange,
// 		toDelete,
// 		updateAddTodo,
// 	};

// 	return (
// 		<TodosContext.Provider value={value}>{children}</TodosContext.Provider>
// 	);
// };

// export default TodosProvider;
