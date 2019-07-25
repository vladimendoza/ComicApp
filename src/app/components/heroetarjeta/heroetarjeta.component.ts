import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styleUrls: ['./heroetarjeta.component.scss']
})
export class HeroetarjetaComponent implements OnInit {

  // @Input, recibir informacion de un componente padre a un hijo 

  /*En angular existe algo llamado 'Input' y 'output'
  para usar los 'imput' hay que importarlos del 
  import '@angular/core' , el input le dira a angular
  que una propiedad que se quiere especificar sea recibida 
  desde fuera*/

  /*la propieda 'heroe' puede venir de otro componente, 
  el @Input le dira a angular que esta propieda sera
  recibida desde afuera, desde un componente padre*/

  @Input() heroe: any = {};//propiedad que recibe el el valor de todos los heroes ya iterados

  @Input() index: number;//recibe el indice de cada tarjeta

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private _route: Router
  ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }


 /*Esta funcion se activara al ser oprimido el boton
  de ver detalles, y funcionara para redireccionar de manera 
   programaticamente siendo redirigido al usuario a otra pagina de nuestra aplicacion*/
   detailHeroe() {
    /*'navigate' viene dentro del servicio router, y te 
    permite navegar entre páginas del router, entre otras 
    cosas... también te permite mandar argumentos. */
     /*la funcion 'navigate()' resibe un arreglo, que
     sera la ruta donde se encuentra nuestro componente
     al cual queremos ser redirigidos y le especificamos
     que llevara un 'id'(index) de cada arreglo de heroe el cual
     sera la propieda '@Input() index' donde sera recibido 
     el indice  */
  this._route.navigate(['/detailheroe', this.index]);
  // this.heroeSeleccionado.emit(this.index);
}

}