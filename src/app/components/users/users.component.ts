import { Component, OnInit } from '@angular/core';
import { User } from '../../TaskInterface';
import { UserItemComponent } from '../user-item/user-item.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    UserItemComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getUsers()
      .subscribe(users => this.users = users);
  }
}
