import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinavOlusturPageRoutingModule } from './sinav-olustur-routing.module';

import { SinavOlusturPage } from './sinav-olustur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinavOlusturPageRoutingModule
  ],
  declarations: [SinavOlusturPage]
})
export class SinavOlusturPageModule {}
