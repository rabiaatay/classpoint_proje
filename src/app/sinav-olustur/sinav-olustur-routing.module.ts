import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinavOlusturPage } from './sinav-olustur.page';

const routes: Routes = [
  {
    path: '',
    component: SinavOlusturPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinavOlusturPageRoutingModule {}
