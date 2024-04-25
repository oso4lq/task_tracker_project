import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { User } from '../../TaskInterface';
import { UserItemComponent } from '../user-item/user-item.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    // RouterModule,
    CommonModule,
    UserItemComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users) => this.users = this.users);
      console.log(this.users);
  };

}
