import { Component } from '@angular/core';
import { Game } from './Game';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  games:Game[] = [
    {
    "caratula": "assets/images/Caratulas/godofwar.jfif",
    "nombre": "god of war 2",
    "fecha_salida": "13/03/2007",
    "precio": 20,
    "stock": 0,
    "cantidad": 0,
    },
    {
      "caratula": "assets/images/Caratulas/godofwar.jfif",
      "nombre": "god of war 2",
      "fecha_salida": "13/03/2007",
      "precio": 20,
      "stock": 3,
      "cantidad":0,
    },
    
  ]
  aumentar_cantidad(game:Game): void{
    if(game.stock && game.cantidad < game.stock)
    game.cantidad++;
  }
  restar_cantidad(game:Game): void{
    if(game.cantidad > 0)
    game.cantidad--;
  }
}
