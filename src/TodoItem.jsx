import { useState } from 'react';
import { useContext } from 'react';
import { TodosContext } from './todosContext';

const TodoItem = ({ todo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const { id, completed, title } = todo;
	const { updateToggleTodo, updateInputChange, toDelete } =
		useContext(TodosContext);

	const handleToggle = (e) => {
		updateToggleTodo({ id: todo.id, completed: e.target.checked });
	};

	const handleInputChange = (e) => {
		updateInputChange({ ...todo, title: e.target.value });
	};

	const handleDelete = () => {
		console.log(id);
		toDelete(id);
	};

	return (
		<li>
			<label>
				<input type='checkbox' checked={completed} onChange={handleToggle} />
				{isEditing ? (
					<input value={title} onChange={handleInputChange} />
				) : (
					<>{title}</>
				)}
			</label>
			{isEditing ? (
				<button onClick={() => setIsEditing(false)} className='btn'>
					Save
				</button>
			) : (
				<button onClick={() => setIsEditing(true)} className='btn'>
					Edit
				</button>
			)}
			<button className='btn btn-danger' onClick={handleDelete}>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
