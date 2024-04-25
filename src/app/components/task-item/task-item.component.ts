import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../../TaskInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  // standalone: true,
  // imports: [FontAwesomeModule, NgStyle],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() togglePriority: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void { }

  handleDeleteTask(task: Task) {
    console.log('delete ' + task.text);
    this.deleteTask.emit(task);
  };

  handlePriority(task: Task) {
    console.log('priority ' + task.text);
    this.togglePriority.emit(task);
  };

}