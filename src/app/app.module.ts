import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

import { TaskService } from './services/task.service';
import { UiService } from './services/ui.service';

@NgModule({
    imports: [
        // FormsModule,
        // CommonModule,
        // FontAwesomeModule,
        // HttpClientModule,

        // RouterModule.forRoot(routes, { enableTracing: true }),

        // MatButtonModule,
        // MatInputModule,
        // MatIconModule,

        // Add more modules here
    ],
    declarations: [
        // AppComponent,
        // HeaderComponent,
        // TasksComponent,
        // TaskItemComponent,
        // ButtonComponent,
        // AddTaskComponent,
    ],
    exports: [
        // AppComponent,
        // HeaderComponent,
        // TasksComponent,
        // TaskItemComponent,
        // ButtonComponent,
        // AddTaskComponent,
    ],
    providers: [
        // TaskService,
        // UiService,
    ],
    bootstrap: [
        // AppComponent,
    ]
})
export class AppModule { }
