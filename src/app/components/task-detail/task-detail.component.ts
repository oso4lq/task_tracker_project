import { Component, Input, OnInit, Output } from '@angular/core';
import { Task, User } from '../../TaskInterface';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})

export class TaskDetailComponent implements OnInit {

  task: Task = {} as Task; // Initialize with an empty Task object
  assignees: User[] = []; // Initialize with an empty array of User objects
  editMode = false; // Property to toggle the edit mode
  selectedStatus: string = ''; // Property to store the selected status

  title: string = this.task.title;
  description: string = this.task.description;
  deadline: string = this.task.deadline;
  priority: boolean = this.task.priority;
  status: string = this.task.status;
  // assignee: Array<Assignee> = [{
  //   id: null,
  //   name: '',
  //   email: '',
  //   role: '',
  // }];
  assignee: string = this.task.assignee;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fetchAssignees();
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId !== null) {
      this.taskService.getTask(taskId).subscribe((task: Task) => {
        this.task = task;
        this.selectedStatus = task.status; // Initialize the selected status when loading the task
      });
    } else {
      // Handle the case where taskId is null
      return;
    }
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
  }

  handleEditTask(task: Task) {
    console.log('edit ' + task.title);
    this.editMode = !this.editMode;
  };

  handleSaveTask(): void {
    console.log('save task');
    this.task.status = this.selectedStatus; // Update the task's status
    this.taskService.saveTask(this.task).subscribe((updatedTask: Task) => {
      console.log('Task saved successfully:', updatedTask);
      this.task = updatedTask;
      this.editMode = false;
    });
    this.router.navigate(['/home']);
  };

  handleDeleteTask(task: Task) {
    console.log('delete ' + task.title);
    this.taskService.deleteTask(task).subscribe(() => {
      console.log('Task deleted successfully');
      // Redirect the user to the home page or any other appropriate page
      this.router.navigate(['/home']);
    }, (error) => {
      console.error('Error deleting task:', error);
    });
  };

  handleReturnHome() {
    console.log('return home');
    this.router.navigate(['/home']);
  };

}