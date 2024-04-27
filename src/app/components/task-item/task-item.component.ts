import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../TaskInterface';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  providers: [DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})

export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() togglePriority: EventEmitter<Task> = new EventEmitter();

  constructor(
    private router: Router,
    private datePipe: DatePipe,
  ) { }
  ngOnInit(): void { }

  formatDate(deadline: string): string {
    return this.datePipe.transform(deadline, 'dd.MM.yy') || '';
  }

  handleDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  };

  handlePriority(task: Task) {
    this.togglePriority.emit(task);
  };

  handleTaskClick(task: Task) {
    this.router.navigate(['/browse-task', task.id]);
  };

};
