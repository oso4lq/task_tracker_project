# TaskTracker project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

The application functionality: 
- display the available tasks, 
- filter tasks, 
- sort tasks to columns with a filter value, 
- create new task, 
- browse existing task,
- edit task,
- delete task.

Each task includes properties: 
- title, 
- description, 
- deadline, 
- priority, 
- status, 
- assignee.


## Stack

Angular, Angular Material, SCSS, TypeScript, RxJs.

## Demonstration
![](https://github.com/oso4lq/task_tracker_project/blob/master/task%20tracker%20project%20gif.gif)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Mocking receiving data from the server

Run `npm run server` for a mock-server hosting objects with tasks and users. Navigate to `http://localhost:4321/`. Two directories `tasks/` and `users/` are available.
The objects are stored in `task_tracker/db.json` file. There are 6 tasks and 3 users available.

## Pages

**Home page**
The Home page displays the available tasks received from the API. Tasks can be filtered using three filters: status, assignee, and deadline. The selected filter is saved to localStorage. The user can toggle the task priority by clicking the bolt icon or delete the task by clicking the trash icon. For user-friendly interface, a Hints section added.

**New task page**
The New task page contains a form for filling out a new task. The 'task name' field is required. The other fields can be left empty and added later.

**Browse task page**
The Browse task page contains a form filled with data for the selected task. On clicking the Edit button, the form becomes available for editing. The user can navigate to Browse task page by double-clicking the task in Home page.

**Users page**
The Users page displays the existing users received from the API.


## Other commands

**Code scaffolding**

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

**Build**

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

**Running unit tests**

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

**Running end-to-end tests**

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

**Further help**

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
