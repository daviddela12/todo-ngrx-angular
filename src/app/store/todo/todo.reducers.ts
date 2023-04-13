import {createFeature, createReducer, on} from "@ngrx/store";
import {TodoState} from "./todo.state";
import {TodoActions} from "./todo.actions";

// 1 Initial State
export const initialState: TodoState = {
  todos: [],
  visibilityFilter: "SHOW_ALL"
}

export const todoFeature = createFeature({
  name: "todoFeature",
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
