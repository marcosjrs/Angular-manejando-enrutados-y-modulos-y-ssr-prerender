import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {proyectos} from 'src/app/modules/shared/data/Proyectos.data';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private _data = proyectos

  constructor() { }

  get data(){
    return this._data;
  }

  getById(id:string){    
    return of(this._data.find((item)=>id===item.nombre));
  }
}
