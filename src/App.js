import TodoForm from './TodoForm';
import TodoList from './TodoList';

import TodosProvider from './todosContext';

import './style.css';

const App = () => {
	return (
		<TodosProvider>
			<TodoForm />
			<TodoList />
		</TodosProvider>
	);
};

export default App;
