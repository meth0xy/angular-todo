import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
@Input() todo!: string;
@Input() index!: number;
showEditInput: boolean = false;

deleteTodoItem() {
  this.appSerivce.deleteTodo(this.index);
}

toggleEdit () {
  this.showEditInput = !this.showEditInput;
}

constructor(private appSerivce: AppService) {}
}
