import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { env } from 'process';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';


if (environment.production) {
  enableProdMode();
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
