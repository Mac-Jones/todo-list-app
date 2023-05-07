import TodoItem from './TodoItem';
import { useTodos } from './todosContext';

const TodoList = () => {
	const todos = useTodos();

	const total = todos.length;
	const packed = todos.filter((todo) => todo.completed).length;

	return (
		<>
			<ul className='list'>
				{todos.length === 0 && 'No Todos'}
				{todos.map((todo) => {
					return <TodoItem key={todo.id} todo={todo} />;
				})}
			</ul>
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

export default TodoList;
