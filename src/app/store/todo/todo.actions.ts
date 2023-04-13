import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Todo} from "./todo.model";

export const TodoActions = createActionGroup({
  source: "[Todo Component]",
  events: {
    'Add Todo': props<{todo: Todo}>(),
    'Change visibility filter': props<{filter: string}>()
  }
})
