import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';

import { FormsModule } from '@angular/forms';
import { GamestoreHomeComponent } from './gamestore-home/gamestore-home.component';
import { GamestoreComponent } from './gamestore/gamestore.component';
import { GameCartComponent } from './game-cart/game-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GamestoreHomeComponent,
    GamestoreComponent,
    GameCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
