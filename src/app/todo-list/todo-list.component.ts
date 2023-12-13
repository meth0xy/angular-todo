import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {
@Input () todos!: string[];
newTodo : string = ''

addNewTodo() {
  this.appService.addTodo(this.newTodo);
  this.newTodo = '';
}

constructor(private appService: AppService) {}
}
