import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';
import { UiService } from './services/ui.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: TaskService, useClass: TaskService },
    { provide: UiService, useClass: UiService},
    importProvidersFrom(RouterModule.forRoot([...routes])),
    importProvidersFrom(HttpClientModule), provideAnimationsAsync(),
  ]
};
