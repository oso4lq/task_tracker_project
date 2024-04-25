import { Component, OnInit } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [AddTaskComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
