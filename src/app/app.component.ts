import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="container-fluid mt-4">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3">
          <app-sidebar></app-sidebar>
        </div>
        
        <!-- Contenido principal -->
        <div class="col-md-9">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paises-app';
}