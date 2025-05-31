// app.routes.ts
import { Routes } from '@angular/router';
import { PorCapitalComponent, PorRegionComponent, VerPaisComponent } from '@app/exports';
import { PorPaisComponent } from '@app/pais/pages/por-pais/por-pais.component';

export const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',  // Changed to lowercase
    component: PorRegionComponent,
  },
  {
    path: 'capital', // Changed to lowercase
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id', // Changed to lowercase
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];



