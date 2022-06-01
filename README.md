# AngularRouting

- Crea modulos y el componente principal de cada módulo
```
ng g m modules/contacto --routing
ng g c modules/contacto
ng g m modules/proyectos --routing
ng g c modules/proyectos
ng g m modules/about --routing
ng g c modules/about
```

- Modificar el app-routing.module.ts para cargar de forma perezosa, cada módulo...
```
const routes: Routes = [
  { 
    path: 'about', 
    loadChildren: () => import("./modules/about/about.module").then(m => m.AboutModule) ,
    pathMatch: 'full'    //para cuando el path debe ser tal cual ese.. (pruebas)
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
  }
];
```

- Y dentro de cada routing de los tres modulos cargamos por defecto su componente principal, por ejemplo en el proyectos-routing.module, pondríamos:
```
const routes: Routes = [
  { path:'', component: ProyectosComponent }
]; 
```

En la vista en lugar de href , usamos routerLink (hay que importar el modulo RouterModule en el modulo donde se cargue) :
 [routerLink]="['/proyectos']" routerLinkActive="active"   // o sin  [/] 

(Con pathMatch: 'full'  hacemos que la ruta tenga que ser exactamente esa.)
Fin de enrutado "normal"


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
