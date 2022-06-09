import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  { path:'', component: ListadoComponent },
  { path:'informacion/:id', component: InformacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
