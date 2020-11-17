import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OgrencigirisPageRoutingModule } from './ogrencigiris-routing.module';

import { OgrencigirisPage } from './ogrencigiris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OgrencigirisPageRoutingModule
  ],
  declarations: [OgrencigirisPage]
})
export class OgrencigirisPageModule {}
