import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../TaskInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent implements OnInit {

  @Input() user!: User;

  constructor() { }
  ngOnInit(): void { }

}
