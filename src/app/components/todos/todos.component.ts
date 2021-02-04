import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: true,
      },
      {
        id: 2,
        title: 'Twende out',
        completed: false,
      },
      {
        id: 1,
        title: 'Tuchane',
        completed: true,
      },
    ];
  }
}
