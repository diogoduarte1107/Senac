import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Carro } from '../../modelos/carros';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Carro[];

  constructor(public navCtrl: NavController) {
    this.carros = [
      {"nome": "Brasília", "preco": 3000, "ano": 1950},
      {"nome": "Fusca", "preco": 6000, "ano": 1970},
      {"nome": "Chevette", "preco": 5000, "ano": 1980},
      {"nome": "Monza", "preco": 4000, "ano": 1985}
    ];

  }

}
