import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiniflarPage } from './siniflar.page';

const routes: Routes = [
  {
    path: '',
    component: SiniflarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniflarPageRoutingModule {}
