import { createContext, useContext, useReducer, useEffect } from 'react';

import todosReducer from './todosReducer';

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export const useTodos = () => useContext(TodosContext);
export const useTodosDispatch = () => useContext(TodosDispatchContext);

const initialValue = () => {
	const localValue = localStorage.getItem('ITEMS');
	if (localValue == null) return [];
	return JSON.parse(localValue);
};

const TodosProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(todosReducer, initialValue());

	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(todos));
	}, [todos]);

	return (
		<TodosContext.Provider value={todos}>
			<TodosDispatchContext.Provider value={dispatch}>
				{children}
			</TodosDispatchContext.Provider>
		</TodosContext.Provider>
	);
};

export default TodosProvider;
