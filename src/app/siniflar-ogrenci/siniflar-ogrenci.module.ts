import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiniflarOgrenciPageRoutingModule } from './siniflar-ogrenci-routing.module';

import { SiniflarOgrenciPage } from './siniflar-ogrenci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiniflarOgrenciPageRoutingModule
  ],
  declarations: [SiniflarOgrenciPage]
})
export class SiniflarOgrenciPageModule {}
