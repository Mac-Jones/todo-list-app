import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAddTodo } from './store/todos/todos.action';
import { selectTodo } from './store/todos/todos.selector';

const TodoForm = () => {
	const dispatch = useDispatch();
	const [newItem, setNewItem] = useState('');

	const todos = useSelector(selectTodo);

	function handleAddTodo(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (newItem === '') return;

		dispatch(
			updateAddTodo(todos, {
				id: crypto.randomUUID(),
				title: newItem,
				completed: false,
			})
		);

		setNewItem('');
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setNewItem(e.target.value);

	return (
		<form onSubmit={handleAddTodo} className='new-item-form'>
			<div className='form-row'>
				<label htmlFor='text'>New Item</label>
				<input value={newItem} onChange={handleChange} type='text' id='text' />
				<button className='btn'>Add</button>
			</div>
		</form>
	);
};

export default TodoForm;
