import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor(private proyectosSvc:ProyectosService) {}

  ngOnInit(): void {
  }

  get data() {
    return  this.proyectosSvc.data;
  }

  getURI(uri:string){
    return encodeURI(uri);
  }

}
