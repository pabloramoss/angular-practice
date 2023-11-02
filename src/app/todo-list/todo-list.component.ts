import { Component } from '@angular/core';
import { Todo, TodoStatus } from 'src/models/Todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList: Todo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      status: TodoStatus.Active
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      status: TodoStatus.Completed
    },
    {
      id: 3,
      title: 'Learn JavaScript',
      status: TodoStatus.Completed
    }
  ]

  newTodo: string = '';

  logTodoList() {
    console.log({todoList: this.todoList, newTodo: this.newTodo});
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }

  toggleTodoStatus(todo: Todo) {
    todo.status = todo.status === TodoStatus.Completed ? TodoStatus.Active : TodoStatus.Completed;
  }

  addTodo() {
    if(this.newTodo !== '') { 
      this.todoList.push({
        id: Date.now(),
        title: this.newTodo,
        status: TodoStatus.Active
      })
    }

    this.newTodo = '';
  }
}
