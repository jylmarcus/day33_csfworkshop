import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  todoForm: FormGroup;
  minDate: string;

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.minDate = new Date().toISOString().slice(0,10);
    this.todoForm = this.fb.group(
      {
        description: this.fb.control<string>(''),
        priority: this.fb.control<string>('low'),
        due: this.fb.control<Date>(new Date())
      }
    )
  }

  processForm() {
    const toDo = this.todoForm.value as Todo;
    console.log(toDo);
  }
}
