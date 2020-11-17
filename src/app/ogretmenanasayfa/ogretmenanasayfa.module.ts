import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OgretmenanasayfaPageRoutingModule } from './ogretmenanasayfa-routing.module';

import { OgretmenanasayfaPage } from './ogretmenanasayfa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OgretmenanasayfaPageRoutingModule
  ],
  declarations: [OgretmenanasayfaPage]
})
export class OgretmenanasayfaPageModule {}
