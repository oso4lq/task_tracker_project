import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    TasksComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {

  constructor() { }

}
