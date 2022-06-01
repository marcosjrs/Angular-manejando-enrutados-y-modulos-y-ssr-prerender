import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosModule } from './modules/proyectos/proyectos.module';

const routes: Routes = [
  { 
    path: 'about', 
    loadChildren: () => import("./modules/about/about.module").then(m => m.AboutModule) 
  }, 
  { 
    path: 'contacto', 
    loadChildren: () => import("./modules/contacto/contacto.module").then(m => m.ContactoModule) 
  }, 
  { 
    path: 'proyectos', 
    loadChildren: () => import("./modules/proyectos/proyectos.module").then(m => m.ProyectosModule) 
  }, 
  { 
    path: '**', 
    redirectTo: 'proyectos' 
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
