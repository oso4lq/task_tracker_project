import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignee, Task } from '../../TaskInterface';
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
  };

};
