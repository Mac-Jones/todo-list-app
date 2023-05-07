import { useState } from 'react';
import { useTodosDispatch } from './todosContext';

const TodoForm = () => {
	const [newItem, setNewItem] = useState('');

	const dispatch = useTodosDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		if (newItem === '') return;

		// addTodo(newItem);
		dispatch({
			type: 'added',
			id: crypto.randomUUID(),
			title: newItem,
			completed: false,
		});

		setNewItem('');
	}

	return (
		<form onSubmit={handleSubmit} className='new-item-form'>
			<div className='form-row'>
				<label htmlFor='text'>New Item</label>
				<input
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
					type='text'
					id='text'
				/>
				<button className='btn'>Add</button>
			</div>
		</form>
	);
};

export default TodoForm;
