import { Component, OnInit } from '@angular/core';

//Importando el modulo de 'rutas'
import { Router, ActivatedRoute } from '@angular/router';

import { HeroesService, Heroes } from '../../../services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

logBrand = '../../../../assets/img/A-66.svg';
  constructor(
    private _heroesService: HeroesService,

    //creando variable para usar el servicio de rutas
    private _route: Router,
    private _router: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

/*Funcion que captura el valor del input, al ser precionado
el enter dentro del buscador*/
  buscarHeroe(termino: string) {

    console.log(termino);
    this._route.navigate(['/search-heroe', termino]);
    console.log('Ha sido redirigido a search-heroe');
    

  }
}
