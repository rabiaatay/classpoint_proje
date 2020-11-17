import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OgrencigirisPage } from './ogrencigiris.page';

const routes: Routes = [
  {
    path: '',
    component: OgrencigirisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OgrencigirisPageRoutingModule {}
