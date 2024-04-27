import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TaskService } from '../../services/task.service';
import { Task, User } from '../../TaskInterface';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})

export class AddTaskComponent implements OnInit {

  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  assignees: User[] = []; // initialize with an empty array of User objects for displaying in the dropdown
  title: string = '';
  description: string = '';
  deadline: string = '';
  priority: boolean = false;
  status: string = '';
  assignee: string = '';

  constructor(
    private router: Router,
    private taskService: TaskService,
  ) { };

  ngOnInit(): void {
    this.fetchAssignees();
  };

  fetchAssignees(): void {
    // fetch assignees from the API
    this.taskService.getUsers().subscribe(
      (users: User[]) => {
        this.assignees = users;
      },
      (error) => {
        console.error('Error fetching assignees:', error);
      }
    );
  };

  onSubmit() {
    if (!this.title) {
      alert('Please enter at least a task name');
      return;
    };

    const newTask = {
      title: this.title,
      description: this.description || 'No description',
      deadline: this.deadline,
      priority: this.priority,
      status: this.status || 'TO DO',
      assignee: this.assignee || 'Unassigned',
    };

    this.addTask.emit(newTask);

    this.title = '';
    this.description = '';
    this.deadline = '';
    this.priority = false;
    this.status = '';
    this.assignee = '';

    this.router.navigate(['/home']);
  };

};
