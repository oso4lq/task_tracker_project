import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { UsersComponent } from './components/users/users.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: MainComponent },
    { path: 'new-task', component: NewTaskComponent },
    { path: 'browse-task/:id', component: TaskDetailComponent },
    { path: 'users', component: UsersComponent },
];
