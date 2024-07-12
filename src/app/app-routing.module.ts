import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamestoreHomeComponent } from './gamestore-home/gamestore-home.component';
import { GamestoreComponent } from './gamestore/gamestore.component';

const routes: Routes = [
  { path: '', component: GamestoreHomeComponent },
  { path: 'home', component: GamestoreHomeComponent },
  { path: 'games', component: GamestoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
