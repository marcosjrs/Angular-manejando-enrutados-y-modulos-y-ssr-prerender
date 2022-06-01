import { Injectable } from '@angular/core';
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
}
