import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }, 
  { path: 'liger', loadChildren: './liger/liger.module#LigerPageModule' },
  { path: 'cerveja-detalhes/:id', loadChildren: './cerveja-detalhes/cerveja-detalhes.module#CervejaDetalhesPageModule' },
  { path: 'add-cerevja', loadChildren: './add-cerevja/add-cerevja.module#AddCerevjaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
