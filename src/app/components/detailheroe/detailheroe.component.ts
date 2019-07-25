import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-detailheroe',
  templateUrl: './detailheroe.component.html',
  styleUrls: ['./detailheroe.component.scss']
})
export class DetailheroeComponent implements OnInit {

  /*Variable local que se mostrara en la vista o 'Template' */
  heroe: any = {};

  imageHero = {
    Marvel: '../../../assets/img/Marvel.png',
    DC: '../../../assets/img/DC.png'
  };


  constructor(

    // importando nuestro servicio de rutas dentro del contructor
    private _activatedRoute:ActivatedRoute,
    private _heroeService: HeroesService,
    private _route:Router
  ) { 

    /*Se necesitara escuchar los cambios que vengan de los 
    parametros 'params' por medio del metodo 'subscribe'
   esto es algo asi comouna promesa, ya que se estara esperando
   un resultado , esto regresara nuestros parametros  */
    this._activatedRoute.params.subscribe(params => {
      console.log(params);

      /*Hace referencia al servicio , luego llama al metodo
      que esta dentro del servicio donde obtiene un 
      heroe en especifico y dentro llevara un parametro
      que sera el id del heroe al cual se selecciono */
      this.heroe = this._heroeService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

  /*Metodo que nos redirige a la seccion de todos los heroes */
  redirigirHeroes() {
    this._route.navigate(['/heroes']);
    
  }

}
