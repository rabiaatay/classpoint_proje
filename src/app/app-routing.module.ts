import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'anasayfa',
    loadChildren: () => import('./anasayfa/anasayfa.module').then( m => m.AnasayfaPageModule)
  },
  {
    path: 'kayitol',
    loadChildren: () => import('./kayitol/kayitol.module').then( m => m.KayitolPageModule)
  },
  {
    path: 'ogrencigiris',
    loadChildren: () => import('./ogrencigiris/ogrencigiris.module').then( m => m.OgrencigirisPageModule)
  },
  {
    path: 'ogretmengiris',
    loadChildren: () => import('./ogretmengiris/ogretmengiris.module').then( m => m.OgretmengirisPageModule)
  },
  {
    path: 'ogrencianasayfa',
    loadChildren: () => import('./ogrencianasayfa/ogrencianasayfa.module').then( m => m.OgrencianasayfaPageModule)
  },
  {
    path: 'ogretmenanasayfa',
    loadChildren: () => import('./ogretmenanasayfa/ogretmenanasayfa.module').then( m => m.OgretmenanasayfaPageModule)
  },
  {
    path: 'sinif',
    loadChildren: () => import('./sinif/sinif.module').then( m => m.SinifPageModule)
  },
  {
    path: 'sinif-ogrenci',
    loadChildren: () => import('./sinif-ogrenci/sinif-ogrenci.module').then( m => m.SinifOgrenciPageModule)
  },
  {
    path: 'sinav-olustur',
    loadChildren: () => import('./sinav-olustur/sinav-olustur.module').then( m => m.SinavOlusturPageModule)
  },

  
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
