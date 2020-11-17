import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OgretmengirisPage } from './ogretmengiris.page';

const routes: Routes = [
  {
    path: '',
    component: OgretmengirisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OgretmengirisPageRoutingModule {}
