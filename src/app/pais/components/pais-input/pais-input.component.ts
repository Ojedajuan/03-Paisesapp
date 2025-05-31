import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pais-input',
  imports: [  CommonModule, RouterModule, FormsModule ],
  templateUrl: './pais-input.component.html',
  styleUrl: './pais-input.component.css'
})
export class PaisInputComponent {
@Output () onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar() {
   this.onEnter.emit (this.termino);// Aquí podrías emitir un evento o llamar a un servicio para realizar la búsqueda
  }
}
