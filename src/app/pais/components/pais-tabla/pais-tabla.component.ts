import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Country } from '@app/interfaces/pais.interface';



@Component({
  selector: 'app-pais-tabla',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './pais-tabla.component.html',
  styleUrl: './pais-tabla.component.css'
})
export class PaisTablaComponent {

@Input() paises : Country [] = []; 

}
