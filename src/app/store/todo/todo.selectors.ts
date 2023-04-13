import {createFeatureSelector, createSelector} from "@ngrx/store";
import {todoFeature} from "./todo.reducers";
import {Todo} from "./todo.model";
import {TodoState} from "./todo.state";
/**
 * SIN forFeature
const todosStateSelector = createFeatureSelector<TodoState>("todoFeature")

const todosSelector = createSelector(
  todosStateSelector,
  (state) => state.todos
);

const filterVisibilitySelector = createSelector(
  todosStateSelector,
  (state) => state.visibilityFilter
);
 **/

const selectFilterTodos = createSelector(
  todoFeature.selectTodos,
  todoFeature.selectVisibilityFilter,
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

export const TodoSelectors = {
  selectFilterTodos
}
