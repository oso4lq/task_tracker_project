import { Component, OnInit } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { RouterModule } from '@angular/router';
import { Task } from '../../TaskInterface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    RouterModule,
    AddTaskComponent,
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent implements OnInit {

  // constructor() { }
  // ngOnInit(): void {
  // }

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe((tasks) => this.tasks = tasks);
  };

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => this.tasks = this.tasks.filter((item) => item.id !== task.id));
  };

  togglePriority(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService.togglePriority(task)
      .subscribe();
  };

  addTask(task: Task) {
    this.taskService.addTask(task)
      .subscribe((task) => this.tasks.push(task));
  };

}
