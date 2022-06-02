import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.activatedRoute.params.subscribe(({id}) => {
      this.getInformacionById(decodeURI(id+''));
    }); 
  }

  irAProyectos(){
    this.router.navigate(['/proyectos']);
  }

  private getInformacionById(id:string){
    this.proyecto = this.proyectosSvc.getById(id);
  }

}
