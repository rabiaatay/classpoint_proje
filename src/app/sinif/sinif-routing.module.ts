import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinifPage } from './sinif.page';

const routes: Routes = [
  {
    path: '',
    component: SinifPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinifPageRoutingModule {}
