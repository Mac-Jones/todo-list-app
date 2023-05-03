import { useReducer, useEffect } from 'react';
import todosReducer from './todosReducer';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './style.css';

const initialValue = () => {
	const localValue = localStorage.getItem('ITEMS');
	if (localValue == null) return [];
	return JSON.parse(localValue);
};

const App = () => {
	const [todos, dispatch] = useReducer(todosReducer, initialValue());

	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(todos));
	}, [todos]);

	function addTodo(title) {
		dispatch({
			type: 'added',
			id: crypto.randomUUID(),
			title,
			completed: false,
		});
	}

	function toggleTodo(id, completed) {
		dispatch({ type: 'toggle', id, completed });
	}

	function handleChangeTodo(nextTodo) {
		dispatch({ type: 'changed', todo: nextTodo });
	}

	function deleteTodo(id) {
		dispatch({ type: 'deleted', id });
	}

	const total = todos.length;
	const packed = todos.filter((todo) => todo.completed).length;

	return (
		<>
			<TodoForm addTodo={addTodo} />
			<h1 className='header'>Todo List</h1>
			<TodoList
				todos={todos}
				onChangeTodo={handleChangeTodo}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
			{total !== 0 ? (
				<div className='items-count'>
					<hr />
					<p>
						{packed} out of {total} completed
					</p>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default App;
