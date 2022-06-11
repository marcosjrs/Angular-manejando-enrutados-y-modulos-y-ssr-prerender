import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { delay, map, tap } from 'rxjs';
import { Pais } from '../models/pais';

@Injectable({providedIn: 'root'})
export class PaisService {
  constructor(private http: HttpClient) { }
  getPaises(){
    return this.http.get<Pais[]>('https://restcountries.com/v2/lang/es')
    .pipe( 
      //delay(2500),
      //tap( (resp: Pais[]) => console.log(resp)),
      map( (resp: Pais[]) =>  resp.map( (pais:any) => ({ nombre: pais.name, codigo: pais.alpha3Code }) ) )
    );
  }  
}