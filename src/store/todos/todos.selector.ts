import { RootState } from '../store';
import { Todo } from './todos.types';
// import { TodosState } from './todos.reducer';

export const selectTodo = (state: RootState): Todo[] => state.todos.todos;
