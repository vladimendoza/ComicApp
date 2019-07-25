

import { RouterModule, Routes  } from '@angular/router';//Modulos internos de angular

//las rutas de los componentes, tendran que ser llamadas aca 

import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DetailheroeComponent } from './components/detailheroe/detailheroe.component';
import { SearchHeroeComponent } from './components/search-heroe/search-heroe.component';


const APP_ROUTES: Routes = [
 
     /*indicamos la ruta que se dara de alta con 
     'path': y dentro de las '' su nombre en el navegador
     y con 'component' sera el componente que va a cargar cuando
     esa ruta se ejecute en nuestro navegador*/
     
          // {path: '', component: Component },
          {path: 'home', component: HomeComponent },
          {path: 'about', component: AboutComponent},
          {path: 'heroes', component: HeroesComponent},

          /*Creando una ruta especial, para ser redirigido
          dentro de la misma pagina por medio de un compo-
          nente, se le pasara un id o codigo cuando se pase
          por el url para ir directamente  a cada 'heroe selecci
          nado'*/
          {path: 'detailheroe/:id', component: DetailheroeComponent},
          {path: 'search-heroe/:termino', component: SearchHeroeComponent},


     
     /*esta ultima ruta se define siempre al final de las demas
     (siempre ponerla, de lo controrario fallara todo)
     esta ruta es la '404' y se ejecuta cuando no encuentra
     ninguno de los otros componentes*/
                                          //sino encuentra niguna ruta, entonces redirecciona al 'home.component.html'
          {path: '**', pathMatch: 'full', redirectTo: 'home'}

     ];
     /*Por ultimo solo queda importar la confifuracion de las rutas*/
     //Exportando el modulo 
     
export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });

                                                       /*Este parametro nos sirve para al momento de hacer '
                                                       refresh' del navegador no perdamos la referencia de la ruta
                                                       se le pasa como parametro un objeto 'json' { useHash: true }*/

