import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiniflarOgrenciPage } from './siniflar-ogrenci.page';

const routes: Routes = [
  {
    path: '',
    component: SiniflarOgrenciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniflarOgrenciPageRoutingModule {}
