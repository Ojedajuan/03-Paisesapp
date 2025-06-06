import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
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

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
 getPaisPorAlpha(alpha: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${alpha}`);
  }
  getPaisesPorRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }


}