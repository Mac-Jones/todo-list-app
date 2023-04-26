import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
	const [newItem, setNewItem] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (newItem === '') return;

		addTodo(newItem);

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
			</div>
			<button className='btn'>Add</button>
		</form>
	);
};

export default TodoForm;
