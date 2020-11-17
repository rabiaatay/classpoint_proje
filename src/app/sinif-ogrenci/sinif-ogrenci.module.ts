import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinifOgrenciPageRoutingModule } from './sinif-ogrenci-routing.module';

import { SinifOgrenciPage } from './sinif-ogrenci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinifOgrenciPageRoutingModule
  ],
  declarations: [SinifOgrenciPage]
})
export class SinifOgrenciPageModule {}
