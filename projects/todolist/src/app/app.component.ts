import { Component } from '@angular/core';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <ul *ngFor="let todo of todoList">
      Liste a faire:
      <p>{{ selectTodo(todo.id) }}</p>
      <li>{{ todo.title }} <span *ngIf="todo.isCompleted">✅</span></li>
    </ul>
  `,
  styles: [],
})
export class AppComponent {
  todoList = TODOS;

  ngOnInit() {
    console.table(this.todoList);
  }

  selectTodo(id: number) {
    console.table(this.todoList[id - 1]);
  }
}
