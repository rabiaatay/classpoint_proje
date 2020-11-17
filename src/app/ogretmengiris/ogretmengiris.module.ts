import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OgretmengirisPageRoutingModule } from './ogretmengiris-routing.module';

import { OgretmengirisPage } from './ogretmengiris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OgretmengirisPageRoutingModule
  ],
  declarations: [OgretmengirisPage]
})
export class OgretmengirisPageModule {}
