import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../TaskInterface';

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

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  };

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
