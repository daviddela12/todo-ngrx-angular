import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todo/todo.reducers";
import {TodoState} from "./todo/todo.state";

// MAIN STATE CONTAINER
export interface AppState {
  todo: TodoState
}

// MAIN REDUCERS CONTAINER
export const AppReducers: ActionReducerMap<AppState> = {
  todo: todoReducer
}
