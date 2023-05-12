import {createReducer, on} from "@ngrx/store";
import {TodoActions} from "./todo.actions";
import {initialState} from "./todo.state";
import {Todo} from "./todo.model";

const todosExample: Todo[] =  [
  {
    id: 1,
    text: "Go to supermarket",
    completed: false
  },
  {
    id: 2,
    text: "Pay the gym fee",
    completed: false
  },
  {
    id: 3,
    text: "Call my mom",
    completed: false
  }
]

export const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, (state) => ({
    ...state,
    todos: todosExample
  })),

  on(TodoActions.addTodo, (state, {todo}) => ({
    ...state,
    todos: [...state.todos, todo]
  })),

  on(TodoActions.changeVisibilityFilter, (state, {filter}) => ({
    ...state,
    visibilityFilter: filter
  })),

  on(TodoActions.changeStatusTodo, (state, {id}) => ({
    ...state,
    todos: state.todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }))
);
