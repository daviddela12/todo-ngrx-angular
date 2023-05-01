import { Component, OnInit } from '@angular/core';
import {Todo} from "../../store/todo/todo.model";
import {TodoActions} from "../../store/todo/todo.actions";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {todoSelectors} from "../../store/todo/todo.selectors";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todoInput: string = "";
  todos$: Observable<Todo[]>;

  constructor(private store:Store) {
    this.todos$ = this.store.pipe(select(todoSelectors.selectFilterTodos));
  }

  addTodo() {
    this.todoInput = "";
    const newTodo: Todo = {
      id: Math.round(Math.random() * 10000) + 1,
      text: this.todoInput,
      completed: false
    }
    this.store.dispatch(TodoActions.addTodo({todo: newTodo}));
  }

  filterTodos(filter: string) {
    this.store.dispatch(TodoActions.changeVisibilityFilter({filter}));
  }

  changeStatusTodo(id: number) {
    this.store.dispatch(TodoActions.changeStatusTodo({id}));
  }
}
