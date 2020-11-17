import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KayitolPageRoutingModule } from './kayitol-routing.module';

import { KayitolPage } from './kayitol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KayitolPageRoutingModule
  ],
  declarations: [KayitolPage]
})
export class KayitolPageModule {}
