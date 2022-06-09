import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
/* import { map, tap } from 'rxjs'; */
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.sass']
})
export class InformacionComponent {
  id = '';
  proyecto:any = {};

  constructor(
    private activatedRoute:ActivatedRoute, 
    private proyectosSvc:ProyectosService,
    private router:Router
  ){ 
    this.activatedRoute
    .params
    .pipe(switchMap(({ id }) => this.proyectosSvc.getById(decodeURI(id+''))))
    .subscribe((proyecto)=>{       
      this.proyecto = proyecto;
    }); 
  }

  irAProyectos(){
    this.router.navigate(['/proyectos']);
  }

}
