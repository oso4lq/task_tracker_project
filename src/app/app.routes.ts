import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

export const routes: Routes = [
    { path: '', component: TasksComponent },
    { path: 'add', component: AddTaskComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'browse', component: BrowseComponent },
    // { path: '**', redirectTo: '/', pathMatch: 'full' },
    // { path: 'add', redirectTo: '/add', pathMatch: 'full' },
    // {path: 'browse', redirectTo: '/browse', pathMatch: 'full'},
    // { path 'login', redirectTo: '/login', pathMatch: 'full' },
    // { path 'register', redirectTo: '/register', pathMatch: 'full' },
];
