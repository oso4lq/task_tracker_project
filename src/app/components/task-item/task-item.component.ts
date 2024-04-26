import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../../TaskInterface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
})

export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() togglePriority: EventEmitter<Task> = new EventEmitter();

  constructor(private router: Router) { }
  ngOnInit(): void { }

  handleDeleteTask(task: Task) {
    console.log('delete ' + task.title);
    this.deleteTask.emit(task);
  };

  handlePriority(task: Task) {
    console.log('priority ' + task.title);
    this.togglePriority.emit(task);
  };

  handleTaskClick(task: Task) {
    console.log('task click ' + task.title);
    this.router.navigate(['/browse-task', task.id]);
  };

};
