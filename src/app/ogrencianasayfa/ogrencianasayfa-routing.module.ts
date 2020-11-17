import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OgrencianasayfaPage } from './ogrencianasayfa.page';

const routes: Routes = [
  {
    path: '',
    component: OgrencianasayfaPage,
    children:[
      {
        path: 'siniflar-ogrenci',
        loadChildren: () => import('../siniflar-ogrenci/siniflar-ogrenci.module').then( m => m.SiniflarOgrenciPageModule)
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
        path: 'sinif-ogrenci/:id',
        loadChildren: () => import('../sinif-ogrenci/sinif-ogrenci.module').then( m => m.SinifOgrenciPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OgrencianasayfaPageRoutingModule {}
