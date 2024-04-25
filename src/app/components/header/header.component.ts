import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    // Router,
    ButtonComponent,
  ],
})

export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
      .subscribe((value) => this.showAddTask = value);
  };

  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe();
  };
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

  handleAddTask() {
    console.log('add item');
    this.uiService.toggleAddTask();
    // this.router.navigate('/new-task');
  };
};
