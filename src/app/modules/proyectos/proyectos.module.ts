import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionComponent } from './components/informacion/informacion.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ListadoComponent } from './components/listado/listado.component';


@NgModule({
  declarations: [
    ListadoComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ]
})
export class ProyectosModule { }
