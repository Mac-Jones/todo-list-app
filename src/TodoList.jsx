import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
	return (
		<ul className='list'>
			{todos.length === 0 && 'No Todos'}
			{todos.map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						{...todo}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				);
			})}
		</ul>
	);
};

export default TodoList;
