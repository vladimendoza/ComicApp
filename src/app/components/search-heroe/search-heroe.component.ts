import { Component, OnInit } from '@angular/core';

/*importando nuestro servicios he interface 'Heroe'*/
import { HeroesService, Heroes } from "../../services/heroes.service";

//Importando el modulo de 'rutas'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.scss']
})
export class SearchHeroeComponent implements OnInit {

  heroesArr: Heroes[] = [];
  termino = '';
  constructor(
    private _heroesService: HeroesService,

    //creando variable para usar el servicio de rutas
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {
      console.log(params);
        this.termino = params['termino'];
      /*Hace referencia al servicio , luego llama al metodo
      que esta dentro del servicio donde obtiene un 
      heroe en especifico y dentro llevara un parametro
      que sera el id del heroe al cual se selecciono */
      this.heroesArr = this._heroesService.buscarHeroes(params['termino']);
    });
  }

}
