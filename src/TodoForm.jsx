import { useState } from 'react';
import { useContext } from 'react';
import { TodosContext } from './todosContext';

const TodoForm = () => {
	const [newItem, setNewItem] = useState('');

	const { updateAddTodo } = useContext(TodosContext);

	function handleAddTodo(e) {
		e.preventDefault();
		if (newItem === '') return;

		updateAddTodo({
			id: crypto.randomUUID(),
			title: newItem,
			completed: false,
		});

		setNewItem('');
	}

	return (
		<form onSubmit={handleAddTodo} className='new-item-form'>
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
