import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'about', 
    loadChildren: () => import("./modules/about/about.module").then(m => m.AboutModule),
    pathMatch: 'full' 
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
    path: 'register', 
    loadChildren: () => import("./modules/register/register.module").then(m => m.RegisterModule) ,
  },
  { 
    path: '**', 
    redirectTo: 'proyectos' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



