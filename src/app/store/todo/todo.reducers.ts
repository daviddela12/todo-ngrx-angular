import {createFeature, createReducer, on} from "@ngrx/store";
import {TodoActions} from "./todo.actions";
import {initialState} from "./todo.state";
import {Todo} from "./todo.model";
/**
const todosExample: Todo[] = [
  {
    id: 1,
    text: "Go to the supermarket",
    completed: false
  },
  {
    id: 2,
    text: "Update my skill profile",
    completed: false
  },
  {
    id: 3,
    text: "Call mom",
    completed: true
  }
]
**/

export const todoFeature = createFeature({
  name: "todo",
  reducer: createReducer(
    initialState,

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
  )
});
