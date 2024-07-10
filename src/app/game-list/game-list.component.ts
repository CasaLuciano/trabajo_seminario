import { Component } from '@angular/core';
import { Game } from './Game';
import { GameDataService } from '../game-data.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  games:Game[] = [];
  
  constructor (
    private gameDataService: GameDataService
  ){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gameDataService.getAll().subscribe(games=> this.games = games);
  }
  aumentar_cantidad(game:Game): void{
    if(game.stock && game.cantidad < game.stock)
    game.cantidad++;
  }
  restar_cantidad(game:Game): void{
    if(game.cantidad > 0)
    game.cantidad--;
  }
}
