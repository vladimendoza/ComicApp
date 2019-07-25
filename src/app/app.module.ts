
//MODULOS DE ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS

/*Se le indica a angular que se necesitara usar el sistema
de rutas, y se importa de esta manera, una vez se haya
configurado el archivo 'app.routing.ts' */
//importando nuestras modulo de ruta
import { routing } from '../app/app.routing';


// SERVICIOS
import { HeroesService } from './services/heroes.service';

//LIBRERIAS EXTERNAS

//libreria de MDB ANGULAR
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//COMPONENTES
import { AppComponent } from './app.component';

//Componentes creados automaticamente con 'ng g component 'name_component''
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailheroeComponent } from './components/detailheroe/detailheroe.component';
import { SearchHeroeComponent } from './components/search-heroe/search-heroe.component';
import { HeroetarjetaComponent } from './components/heroetarjeta/heroetarjeta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    DetailheroeComponent,
    SearchHeroeComponent,
    HeroetarjetaComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    routing//importando el sistema de rutas
  ],
  providers: [
    //acá se declaran los servicios que se vallan creando
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
