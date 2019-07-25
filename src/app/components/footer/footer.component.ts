import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   
  /*declarando una variable de tipo 'date' para estar 
  obteniendo la fecha de forma automantica*/
  public anio: number;
  constructor() {

    this.anio = new Date().getFullYear();

   }

  ngOnInit() {
  }

}
