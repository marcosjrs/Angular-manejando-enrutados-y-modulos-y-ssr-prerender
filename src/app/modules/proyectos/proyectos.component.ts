import { Component, OnInit } from '@angular/core';
import { ProyectosService } from './services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass']
})
export class ProyectosComponent implements OnInit {

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
