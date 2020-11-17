import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiniflarPageRoutingModule } from './siniflar-routing.module';

import { SiniflarPage } from './siniflar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiniflarPageRoutingModule
  ],
  declarations: [SiniflarPage]
})
export class SiniflarPageModule {}
