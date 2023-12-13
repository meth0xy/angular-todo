import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  todos : string[] = ['test', 'todo2', 'todo3'];
  constructor() { }

  getTodos () {
    return this.todos;
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  deleteTodo(index: number) {
    console.log('delete', index)
    delete this.todos[index];
  }
}
