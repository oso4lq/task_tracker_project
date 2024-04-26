import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task, User } from '../../TaskInterface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})

export class AddTaskComponent implements OnInit {

  assignees: User[] = []; // Initialize with an empty array of User objects

  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  title: string = '';
  description: string = '';
  deadline: string = '';
  priority: boolean = false;
  status: string = '';
  // assignee: Array<Assignee> = [{
  //   id: null,
  //   name: '',
  //   email: '',
  //   role: '',
  // }];
  assignee: string = '';

  constructor(
    private router: Router,
    private taskService: TaskService,
  ) { };

  ngOnInit(): void {
    this.fetchAssignees();
  };

  fetchAssignees(): void {
    // Fetch assignees from the API
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
      alert('Please add a task');
      return;
    }

    const newTask = {
      title: this.title,
      description: this.description,
      deadline: this.deadline,
      priority: this.priority,
      status: this.status,
      assignee: this.assignee,
    };

    console.log('added task');
    console.log(newTask);

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
