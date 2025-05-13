import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent, PorCapitalComponent, VerPaisComponent, PorRegionComponent } from '@app/exports';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, PorRegionComponent, VerPaisComponent, PorCapitalComponent, PaisComponent],
  template: `
    <div class="sidebar-container">
      <h2>Sidebar de Navegación</h2>
      <div class="menu-items">
        <app-por-region></app-por-region>
        <app-ver-pais></app-ver-pais>
        <app-por-capital></app-por-capital>
        <app-pais></app-pais>
      </div>
    </div>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Agregar alguna funcionalidad básica para verificar que el componente funciona
  isActive = true;

  constructor() {
    console.log('SidebarComponent inicializado correctamente');
  }
}