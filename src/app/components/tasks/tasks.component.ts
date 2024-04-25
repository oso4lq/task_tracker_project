import { Component, OnInit } from '@angular/core';
import { Task } from '../../TaskInterface';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    TaskItemComponent,
    AddTaskComponent,
  ],
})

export class TasksComponent implements OnInit {

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
    task.priority = !task.priority;
    console.log(task.priority);
    this.taskService.togglePriority(task)
      .subscribe();
  };

  addTask(task: Task) {
    this.taskService.addTask(task)
      .subscribe((task) => this.tasks.push(task));
  };

}
