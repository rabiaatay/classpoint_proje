import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KayitolPage } from './kayitol.page';

const routes: Routes = [
  {
    path: '',
    component: KayitolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KayitolPageRoutingModule {}
