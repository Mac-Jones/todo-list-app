import { Fragment } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './style.css';

const App = () => {
	return (
		<Fragment>
			<TodoForm />
			<TodoList />
		</Fragment>
	);
};

export default App;
