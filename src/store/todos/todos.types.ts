export enum TODOS_ACTION_TYPES {
	UPDATE_TODO = 'todos/UPDATE_TODO',
}

export type Todo = {
	id: string;
	title: string;
	completed: boolean;
};
