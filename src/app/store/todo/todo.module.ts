import {StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {todoFeature} from "./todo.reducers";

@NgModule({
  imports: [
    StoreModule.forFeature(todoFeature)
  ],
})
export class TodoModule {}
