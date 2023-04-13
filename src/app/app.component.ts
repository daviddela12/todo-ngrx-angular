import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoActions} from "./store/todo/todo.actions";
import {Todo} from "./store/todo/todo.model";
import {todoFeature} from "./store/todo/todo.reducers";
import {Observable} from "rxjs";
import {TodoSelectors} from "./store/todo/todo.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-ngrx-app';

  todoInput: string = "";

  todos$: Observable<Todo[]> = new Observable<Todo[]>();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(TodoSelectors.selectFilterTodos));
  }


  addTodo() {
    const newTodo: Todo = {
      id: Math.round(Math.random() * 10000) + 1,
      text: this.todoInput,
      completed: false
    }
    this.store.dispatch(TodoActions.addTodo({todo: newTodo}));
    this.todoInput = "";
  }

  filterTodos(filter: string) {
    this.store.dispatch(TodoActions.changeVisibilityFilter({filter}));
  }

}
