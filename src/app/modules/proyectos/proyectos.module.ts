import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { InformacionComponent } from './Components/informacion/informacion.component';


@NgModule({
  declarations: [
    ProyectosComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ]
})
export class ProyectosModule { }
