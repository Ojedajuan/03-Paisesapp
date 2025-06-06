import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../../interfaces/pais.interface';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {
  regiones: { code: string, name: string, icon: string }[] = [
    { code: 'africa', name: 'África', icon: '🌍' },
    { code: 'americas', name: 'América', icon: '🌎' },
    { code: 'asia', name: 'Asia', icon: '🌏' },
    { code: 'europe', name: 'Europa', icon: '🇪🇺' },
    { code: 'oceania', name: 'Oceanía', icon: '🏝️' }
  ];

  regionActiva: string = '';
  paises: Country[] = [];
  loading: boolean = false;
  error: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscarPorRegion(region: string): void {
    if (this.regionActiva === region) {
      // Si es la misma región, limpiar
      this.regionActiva = '';
      this.paises = [];
      return;
    }

    this.regionActiva = region;
    this.loading = true;
    this.error = false;
    this.paises = [];

    console.log('Buscando región:', region);

    // Asumiendo que tienes un método en el servicio para buscar por región
    this.paisService.getPaisesPorRegion(region).subscribe({
      next: (paises) => {
        this.paises = paises;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar países:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  getRegionName(code: string): string {
    const region = this.regiones.find(r => r.code === code);
    return region ? region.name : code;
  }
}