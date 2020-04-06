import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { SecondComponent} from '../app/second/second.component';
import { MainComponent } from './main/main.component';

const routes : Routes = [
  //{ path : '/' , component : MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path : 'main' , component : MainComponent },
  { path : 'second' , component : SecondComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
