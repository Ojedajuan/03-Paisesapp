import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaisService } from '@app/pais/services/pais.service';
import { Country } from '@app/interfaces/pais.interface';
import { PaisTablaComponent } from "../../components/pais-tabla/pais-tabla.component";
import { PaisInputComponent } from "../../components/pais-input/pais-input.component"; // ← Corregido: cambié 'paises' por 'pais'

@Component({
  selector: 'app-por-pais',
  imports: [FormsModule, CommonModule, RouterModule, PaisTablaComponent, PaisInputComponent],
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino.trim(); 
    
    // Eliminar espacios en blanco al inicio y al fin

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          console.log(paises);
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