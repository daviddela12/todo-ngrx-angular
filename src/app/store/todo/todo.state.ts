import {Todo} from "./todo.model";

export interface TodoState {
  todos: Todo[];
  visibilityFilter: string;
}

export const initialState: TodoState = {
  todos: [],
  visibilityFilter: "SHOW_ALL"
}
