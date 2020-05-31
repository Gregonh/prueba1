import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];

  constructor() {
    const correo1 = {
      titulo: "Breaking bad",
      ano: "1992",
      cuerpo: 'serie de droga',
      emisor: 'correoEmisor1@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: true,
      imagen: 'https://www.w3schools.com/images/lamp.jpg',
    };
    const correo2 = {
      titulo: "Walking dead",
      ano: "1992",
      cuerpo: `Cuerpo del Email`,
      emisor: 'correoEmisor2@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: false,
      imagen: 'https://www.w3schools.com/images/lamp.jpg',
    };
    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
  }

  ngOnInit(): void {
  }

}
