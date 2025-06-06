// main.ts bootstrap code
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withDebugTracing } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ← Importa esto
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withDebugTracing()),
    provideHttpClient(), // ← Añade esta línea
  ]
}).catch(err => console.error(err));