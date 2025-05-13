import { Component, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PaisComponent } from "./pais/pais.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PorRegionComponent, VerPaisComponent, PorCapitalComponent, PorPaisComponent,SidebarComponent]
})
export class AppComponent {
  title = 'Paisesapp';
}
