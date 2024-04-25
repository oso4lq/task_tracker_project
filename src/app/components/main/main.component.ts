import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    TasksComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit {

  protected links = [
    {
      name: 'New task',
      url: 'new-task',
    },
    {
      name: 'Browse task',
      url: 'browse-task',
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  to(url: string) {
    this.router.navigateByUrl(url);
  }

}
