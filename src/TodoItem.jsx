import { useState } from 'react';

const TodoItem = ({ todo, onChangeTodo, toggleTodo, deleteTodo }) => {
	const [isEditing, setIsEditing] = useState(false);
	console.log(isEditing);
	const { id, completed, title } = todo;

	let todoEditingContent;

	if (isEditing) {
		todoEditingContent = (
			<>
				<input
					value={title}
					onChange={(e) => {
						onChangeTodo({
							...todo,
							title: e.target.value,
						});
					}}
				/>
			</>
		);
	} else {
		todoEditingContent = <>{title}</>;
	}

	return (
		<li>
			<label>
				<input
					type='checkbox'
					checked={completed}
					onChange={(e) => toggleTodo(id, e.target.checked)}
				/>
				{todoEditingContent}
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
			<button className='btn btn-danger' onClick={() => deleteTodo(id)}>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
