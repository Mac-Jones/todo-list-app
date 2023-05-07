import { useState } from 'react';
import { useTodosDispatch } from './todosContext';

const TodoItem = ({ todo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const { id, completed, title } = todo;
	const dispatch = useTodosDispatch();

	let todoEditingContent;

	if (isEditing) {
		todoEditingContent = (
			<>
				<input
					value={title}
					onChange={(e) => {
						// onChangeTodo({
						// 	...todo,
						// 	title: e.target.value,
						// });
						dispatch({
							type: 'changed',
							todo: {
								...todo,
								title: e.target.value,
							},
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
					onChange={(e) => {
						// toggleTodo(id, e.target.checked);
						dispatch({
							type: 'toggle',
							id,
							completed: e.target.checked,
						});
					}}
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
			<button
				className='btn btn-danger'
				onClick={() => {
					//  deleteTodo(id);
					dispatch({
						type: 'deleted',
						id,
					});
				}}
			>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
