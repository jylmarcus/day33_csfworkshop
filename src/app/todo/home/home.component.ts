import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  todoForm: FormGroup;
  minDate: string;
  todoList: Todo[] = [];

  constructor(private fb: FormBuilder, private toDoService: TodoService, private router: Router) { };

  ngOnInit(): void {
    this.minDate = new Date().toISOString().slice(0,10);
    this.todoForm = this.fb.group(
      {
        description: this.fb.control<string>(''),
        priority: this.fb.control<string>('low'),
        due: this.fb.control<Date>(new Date())
      }
    )
    this.toDoService.getAll('todo').subscribe((data => {
      this.todoList = data;
    }))
  }

  processForm() {
    const toDo = this.todoForm.value as Todo;
    this.toDoService.create('todo', toDo).subscribe({
      next: (data) => {
        this.router.navigate(["/todo/home"])
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.toDoService.getAll('todo').subscribe((data => {
      this.todoList = data;
    }))
  }
}
