import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DersprogramiPage } from './dersprogrami.page';

const routes: Routes = [
  {
    path: '',
    component: DersprogramiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DersprogramiPageRoutingModule {}
