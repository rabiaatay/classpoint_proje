import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DersprogramiPageRoutingModule } from './dersprogrami-routing.module';

import { DersprogramiPage } from './dersprogrami.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DersprogramiPageRoutingModule
  ],
  declarations: [DersprogramiPage]
})
export class DersprogramiPageModule {}
