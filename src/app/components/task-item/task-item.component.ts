import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../../TaskInterface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

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

  constructor() { }
  ngOnInit(): void { }

  handleDeleteTask(task: Task) {
    console.log('delete ' + task.title);
    this.deleteTask.emit(task);
  };

  handlePriority(task: Task) {
    console.log('priority ' + task.title);
    this.togglePriority.emit(task);
  };

};
