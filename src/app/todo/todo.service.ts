import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAll(resource: string) {
    return this.http.get<Todo[]>(this.apiURL + resource);
  }

  create(resource: string, payload: Todo) {
    return this.http.post<Todo>(this.apiURL + resource, payload);
  }
}
