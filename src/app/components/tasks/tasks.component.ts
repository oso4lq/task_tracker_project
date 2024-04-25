import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../../services/task.service';

import { Task } from '../../TaskInterface';
import { STATUS_NAMES } from '../../status.constants';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    TaskItemComponent,
    // AddTaskComponent,
  ],
})

export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  statusNames: string[] = STATUS_NAMES;
  filter: string = 'status'; // filter by default === status
  filteredTasks: { [key: string]: Task[] } = {}; // Object to store tasks filtered by key

  columnNumber: number = 0; // display X columns of tasks by filter
  keys = Object.keys;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.filterTasks(); // Filter tasks by assignee on component initialization
      });
  };

  filterTasks(): void {
    this.filteredTasks = {};
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


  /*
    filterTasks(status: string): Task[] {
      // return this.tasks.filter(task => task.status === status);
      if (this.filter === 'status') {
        this.columnNumber = this.statusNames.length;
        console.log(this.columnNumber);
        return this.tasks.filter(task => task.status === status);
      }
      else if (this.filter === 'assignee') {
        const assignees = this.tasks.map(task => task.assignee);
        const uniqueAssignees = Array.from(new Set(assignees));
        this.columnNumber = uniqueAssignees.length;
        console.log(this.columnNumber);
        return this.tasks.filter(task => task.assignee === uniqueAssignees[1]);
  
        // return this.filterByAssignee();
      } else if (this.filter === 'deadline') {
  
        const deadlines = this.tasks.map(task => task.deadline);
        const uniqueDeadliness = Array.from(new Set(deadlines));
        this.columnNumber = uniqueDeadliness.length;
        console.log(this.columnNumber);
        return this.tasks.filter(task => task.deadline === uniqueDeadliness[1]);
  
        // return this.filterByDeadline();
      }
      else {
        return [];
      }
    };
  
    // Filter tasks by assignee
    filterByAssignee(): Task[] {
      const assignees = this.tasks.map(task => task.assignee);
      const uniqueAssignees = Array.from(new Set(assignees));
      console.log(uniqueAssignees);
      console.log(this.tasks.filter(task => uniqueAssignees.includes(task.assignee)));
      return this.tasks.filter(task => uniqueAssignees.includes(task.assignee));
    };
    // Filter tasks by deadline
    filterByDeadline(): Task[] {
      const deadlines = this.tasks.map(task => task.deadline);
      const uniqueDeadlines = Array.from(new Set(deadlines));
      console.log(uniqueDeadlines);
      console.log(this.tasks.filter(task => uniqueDeadlines.includes(task.assignee)));
      return this.tasks.filter(task => uniqueDeadlines.includes(task.deadline));
    };
  */



  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.tasks = this.tasks.filter((item) => item.id !== task.id);
        this.filterTasks();
      });
  };

  togglePriority(task: Task) {
    task.priority = !task.priority;
    console.log(task.priority);
    this.taskService.togglePriority(task)
      .subscribe();
  };

}
