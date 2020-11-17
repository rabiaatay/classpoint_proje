import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinifOgrenciPage } from './sinif-ogrenci.page';

const routes: Routes = [
  {
    path: '',
    component: SinifOgrenciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinifOgrenciPageRoutingModule {}
