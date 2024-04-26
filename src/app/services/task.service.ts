import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, User } from '../TaskInterface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private API_URL = 'http://localhost:4321/tasks';
  private API_URL_USERS = 'http://localhost:4321/users';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  };

  getTask(id: string): Observable<Task> {
    const url = `${this.API_URL}/${id}`;
    console.log(this.http.get<Task>(url));
    return this.http.get<Task>(url);
  };

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.API_URL_USERS);
  // }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL_USERS);
  }

  saveTask(task: Task): Observable<Task> {
    const URL = `${this.API_URL}/${task.id}`;
    return this.http.put<Task>(URL, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const URL = `${this.API_URL}/${task.id}`;
    return this.http.delete<Task>(URL);
  };

  togglePriority(task: Task): Observable<Task> {
    const URL = `${this.API_URL}/${task.id}`;
    return this.http.put<Task>(URL, task, httpOptions);
  };

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URL, task, httpOptions);
  };

}
