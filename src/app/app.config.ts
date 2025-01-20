import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // route for standalone

export const appConfig: ApplicationConfig = { // for standalone
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

// todo remove file
