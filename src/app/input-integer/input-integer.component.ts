import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{
  constructor(){}
  @Input()
    cantidad!: number;

  @Input()
    max!: number
  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
      
  }
  aumentar_cantidad(): void{
    if(this.max && this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  restar_cantidad(): void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
}
