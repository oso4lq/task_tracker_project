import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../TaskInterface';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
})

export class AddTaskComponent implements OnInit {

  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  subscription: Subscription;
  showAddTask: boolean = false;

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

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    console.log('added task');
    console.log(newTask);

    this.addTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  };

};
