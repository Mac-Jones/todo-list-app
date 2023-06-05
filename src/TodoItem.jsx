import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo } from './store/todos/todos.selector';
import {
	updateInputChange,
	updateToggleTodo,
	toDelete,
} from './store/todos/todos.action';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const { id, completed, title } = todo;

	const todos = useSelector(selectTodo);

	const handleToggle = (e) => {
		dispatch(
			updateToggleTodo(todos, { id: todo.id, completed: e.target.checked })
		);
	};

	const handleInputChange = (e) => {
		dispatch(updateInputChange(todos, { ...todo, title: e.target.value }));
	};

	const handleDelete = () => {
		dispatch(toDelete(todos, id));
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
