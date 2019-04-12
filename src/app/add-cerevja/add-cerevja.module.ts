import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddCerevjaPage } from './add-cerevja.page';

const routes: Routes = [
  {
    path: '',
    component: AddCerevjaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddCerevjaPage]
})
export class AddCerevjaPageModule {}
