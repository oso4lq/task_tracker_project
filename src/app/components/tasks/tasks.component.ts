import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { Task } from '../../TaskInterface';
import { STATUS_NAMES } from '../../status.constants';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    TaskItemComponent,
  ],
  providers: [DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})

export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  statusNames: string[] = STATUS_NAMES; // imported from status.constants.ts
  filter: string = 'status'; // filter by default === status
  filteredTasks: { [key: string]: Task[] } = {}; // Object to store tasks filtered by key
  columnNumber: number = 0; // display X columns of tasks by filter
  keys = Object.keys; // keys for displaying the columns

  constructor(
    private taskService: TaskService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    const storedFilter = localStorage.getItem('filter');
    this.filter = storedFilter || 'status';
    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.filterTasks();
      });
  };

  filterTasks(): void {
    this.filteredTasks = {};
    localStorage.setItem('filter', this.filter);
    switch (this.filter) {
      case 'status':
        this.statusNames.forEach(status => {
          const tasksForStatus = this.tasks.filter(task => task.status === status);
          this.filteredTasks[status] = tasksForStatus;
        });
        break;
      case 'assignee':
        const assignees = Array.from(new Set(this.tasks.map(task => task.assignee)));
        assignees.forEach(assignee => {
          const tasksForAssignee = this.tasks.filter(task => task.assignee === assignee);
          this.filteredTasks[assignee] = tasksForAssignee;
        });
        break;
      case 'deadline':
        const deadlines = Array.from(new Set(this.tasks.map(task => task.deadline)));
        deadlines.forEach(deadline => {
          const tasksForDeadline = this.tasks.filter(task => task.deadline === deadline);
          this.filteredTasks[deadline] = tasksForDeadline;
        });
        break;
    }
    this.columnNumber = Object.keys(this.filteredTasks).length;
  };

  onFilterChange(filterValue: string): void {
    this.filter = filterValue;
    this.filterTasks();
  };

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.tasks = this.tasks.filter((item) => item.id !== task.id);
        this.filterTasks();
      });
  };

  togglePriority(task: Task) {
    task.priority = !task.priority;
    this.taskService.togglePriority(task)
      .subscribe();
  };

  isDeadlineFilter(): boolean {
    return this.filter === 'deadline';
  };

  formatDate(deadline: string): string {
    return this.datePipe.transform(deadline, 'dd.MM.yy') || '';
  };
};
