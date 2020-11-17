import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OgretmenanasayfaPage } from './ogretmenanasayfa.page';

const routes: Routes = [
  {
    path: '',
    component: OgretmenanasayfaPage,
    children:[
      {
        path: 'siniflar',
        loadChildren: () => import('../siniflar/siniflar.module').then( m => m.SiniflarPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'dersprogrami',
        loadChildren: () => import('../dersprogrami/dersprogrami.module').then( m => m.DersprogramiPageModule)
      },
      {
        path: 'mesajlar',
        loadChildren: () => import('../mesajlar/mesajlar.module').then( m => m.MesajlarPageModule)
      },
      {
        path: 'sinif/:id',
        loadChildren: () => import('../sinif/sinif.module').then( m => m.SinifPageModule)
      },
      {
        path: 'sinav-olustur/:id',
        loadChildren: () => import('../sinav-olustur/sinav-olustur.module').then( m => m.SinavOlusturPageModule)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OgretmenanasayfaPageRoutingModule {}
