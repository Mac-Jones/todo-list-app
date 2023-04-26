import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './style.css';

const App = () => {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem('ITEMS');
		if (localValue == null) return [];
		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(todos));
	}, [todos]);

	function addTodo(title) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function handleChangeTodo(nextTodo) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === nextTodo.id) return nextTodo;
				return todo;
			})
		);
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

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
		</>
	);
};

export default App;
