import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game } from './game-list/Game';
const URL = "https://63fbe2dd1ff79e133295922c.mockapi.io/proyect/game"
@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Game[]>{
    return this.http.get<Game[]>(URL)
      .pipe(
        tap((games: Game[]) => games.forEach(games => games.cantidad = 0))
      );
  }
}
