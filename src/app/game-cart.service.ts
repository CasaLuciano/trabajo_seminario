import { Injectable } from '@angular/core';
import { Game } from './game-list/Game';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {
  
  constructor() { }
  private _paraComprar: Game[] = [];
  paraComprar: BehaviorSubject<Game[]> = new BehaviorSubject(this._paraComprar);

  agregar_Al_Carrito(game: Game) {
    let item = this._paraComprar.find((v1) => v1.nombre == game.nombre);
    if(!item){
      this._paraComprar.push({... game});

    } else{
      item.cantidad+= game.cantidad;
    }
    console.log(this._paraComprar);
    this.paraComprar.next(this._paraComprar);
  }
}
