import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@app/interfaces/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor( private http:HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
