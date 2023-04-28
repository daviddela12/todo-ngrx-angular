import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todo/todo.reducers";
import {TodoState} from "./todo/todo.state";

export interface AppState {
  todo: TodoState
}

export const AppReducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
}
