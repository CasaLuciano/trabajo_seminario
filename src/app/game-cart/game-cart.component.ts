import { Component } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-game-cart',
  templateUrl: './game-cart.component.html',
  styleUrl: './game-cart.component.scss'
})
export class GameCartComponent {

  paraComprar: Game[] = [];
  constructor(private cart: GameCartService){
    cart.paraComprar.subscribe(c => this.paraComprar = c);
  }

}
