import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Todo} from "./todo.model";
import {TodoState} from "./todo.state";

const selectTodoState = createFeatureSelector<TodoState>("todo")

const selectTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);

const selectVisibilityFilter = createSelector(
  selectTodoState,
  (state) => state.visibilityFilter
);

const selectFilterTodos = createSelector(
  selectTodos,
  selectVisibilityFilter,
  (todos: Todo[], filter: string) => {
    switch (filter) {
      case "SHOW_PENDING":
        return todos.filter((todo) => todo?.completed === false)
      case "SHOW_COMPLETED":
        return todos.filter((todo) => todo.completed === true)
      default:
        return todos;
    }
  }
);

export const todoSelectors = {
  selectTodoState,
  selectTodos,
  selectVisibilityFilter,
  selectFilterTodos
}
