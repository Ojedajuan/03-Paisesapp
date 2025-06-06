import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisInputComponent } from "../../components/pais-input/pais-input.component";
import { PaisService } from '../../services/pais.service';
import { Country } from '../../../interfaces/pais.interface';
import { PaisTablaComponent } from "../../components/pais-tabla/pais-tabla.component";


@Component({
  selector: 'app-por-capital',
  imports: [PaisInputComponent, PaisTablaComponent,CommonModule ],
  templateUrl: './por-capital.component.html',
  styleUrl: './por-capital.component.css',
  providers: [PaisService]
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino.trim(); // Eliminar espacios en blanco al inicio y al fin

    this.paisService.buscarCapital(termino)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
        },
        error: (err) => {
          console.error('Error al buscar países:', err);
          this.hayError = true;
          this.paises = [];
        }
      });
  }
}