import {createFeature, createReducer, on} from "@ngrx/store";
import {TodoActions} from "./todo.actions";
import {initialState} from "./todo.state";

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
