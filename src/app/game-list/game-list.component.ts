import { Component } from '@angular/core';
import { Game } from './Game';
import { GameDataService } from '../game-data.service';
import { GameCartService } from '../game-cart.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  games:Game[] = [];
  constructor (
    private gameDataService: GameDataService,
    private cart: GameCartService
  ){
  }
  ngOnInit(): void {
    this.gameDataService.getAll().subscribe(games=> this.games = games);
  }
  aumentar_cantidad(game:Game): void{
    if(game.stock && game.cantidad < game.stock)
    game.cantidad++;
  }
  agregar_Al_Carrito(game:Game){
    this.cart.agregar_Al_Carrito(game);
    game.stock -= game.cantidad;
    game.cantidad = 0;
  }
  restar_cantidad(game:Game): void{
    if(game.cantidad > 0)
    game.cantidad--;
  }
}
