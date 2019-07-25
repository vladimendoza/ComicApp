import { Component, OnInit } from "@angular/core";

/*importando nuestro servicios he interface 'Heroe'*/
import { HeroesService, Heroes } from "../../services/heroes.service";

//Importando el modulo de 'rutas'
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {

  //creando variable que sera de tipo 'Heroe' => implementando interface 'Heroe'
  heroes: Heroes[] = [];

  /*Declaramos nuestro servicio dentro de los '()' del
  constructor y su visibilidad sera 'private' para que
  solo pueda ser accesible por este componente, 
  luego se le da un alias con un '_' para especificar
  que sera un servicio, se le indica que sera
  de tipo ':' y el nombre del servicio */
  constructor(
    private _heroesService: HeroesService,

    //creando variable para usar el servicio de rutas
    private _route: Router,
    private _router: ActivatedRoute,
    ) {}

  ngOnInit() {
    /*De esta manera al cargar la pagina, le indicamos
    a nuestra variable 'heroes de tipo any' que puede
    utilizar el servicio que ya se creo y su metodo para
    obtener la data de los heroes*/
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);

  }

  /*Esta funcion se activara al ser oprimido el boton
  de ver detalles, y funcionara para redireccionar de manera 
   programaticamente siendo redirigido al usuario a otra pagina de nuestra aplicacion*/
   detailHeroe(index: number) {
      /*'navigate' viene dentro del servicio router, y te 
      permite navegar entre páginas del router, entre otras 
      cosas... también te permite mandar argumentos. */
       /*la funcion 'navigate()' resibe un arreglo, que
       sera la ruta donde se encuentra nuestro componente
       al cual queremos ser redirigidos y le especificamos
       que llevara un 'id'(index) de cada arreglo de heroe */
    this._route.navigate(['/detailheroe', index]);
  }
}

