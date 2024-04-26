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
    { path: 'users', component: UsersComponent }

    // { path: 'new-task', 
    //     loadComponent: () =>
    //         import('./components/add-task/add-task.component').then(
    //             (mod) => mod.NewTaskComponent,
    //         ),
    // },

    // { path: 'add', component: AddTaskComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'browse', component: BrowseComponent },
    // { path: '**', redirectTo: '/', pathMatch: 'full' },
    // { path: 'add', redirectTo: '/add', pathMatch: 'full' },
    // {path: 'browse', redirectTo: '/browse', pathMatch: 'full'},
    // { path 'login', redirectTo: '/login', pathMatch: 'full' },
    // { path 'register', redirectTo: '/register', pathMatch: 'full' },
];
