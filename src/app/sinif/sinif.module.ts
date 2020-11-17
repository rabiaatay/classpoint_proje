import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinifPageRoutingModule } from './sinif-routing.module';

import { SinifPage } from './sinif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinifPageRoutingModule
  ],
  declarations: [SinifPage]
})
export class SinifPageModule {}
