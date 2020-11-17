import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OgrencianasayfaPageRoutingModule } from './ogrencianasayfa-routing.module';

import { OgrencianasayfaPage } from './ogrencianasayfa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OgrencianasayfaPageRoutingModule
  ],
  declarations: [OgrencianasayfaPage]
})
export class OgrencianasayfaPageModule {}
