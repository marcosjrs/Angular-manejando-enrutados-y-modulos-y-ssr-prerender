import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { ProyectosComponent } from './proyectos.component';

const routes: Routes = [
  { path:'', component: ProyectosComponent },
  { path:'informacion/:id', component: InformacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
