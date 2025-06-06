
import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  imports: [CommonModule],
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(paises => console.log('Datos recibidos:', paises))
      )
      .subscribe(([pais]: Country[]) => {
  if (pais) {
    this.pais = pais;// Extraemos el primer país del array
        }
      });
  }
}