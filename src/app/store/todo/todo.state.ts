import {Todo} from "./todo.model";

export interface TodoState {
  todos: Todo[];
  visibilityFilter: string;
}
