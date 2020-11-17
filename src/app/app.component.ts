import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Author } from './entities/author';
import { Category } from './entities/category';
import { Post } from './entities/post';
import { Table_Ogrenci } from './entities/table_ogrenci';

import { createConnection, ConnectionOptions } from 'typeorm';
import { Table_Ogretmen } from './entities/table_ogretmen';
import { Table_Sinif } from './entities/table_sinif';
import { Table_Sinif_Ogrenci } from './entities/table_sinif_ogrenci';
import { Table_Paylasim } from './entities/table_paylasim';
import { Table_Sinavlar } from './entities/table_sinavlar';
import { Table_Soru_Turu } from './entities/table_soru_turu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      await this.createConnection();
    });
  }

  private createConnection() {
    let dbOptions: ConnectionOptions;

    if (this.platform.is('cordova')) {

      dbOptions = {
        type: 'cordova',
        database: '__mydatabase',
        location: 'default'
      };
    } else {

      dbOptions = {
        type: 'sqljs',
        location: 'browser',
        autoSave: true
      };
    }


    // additional options
    Object.assign(dbOptions, {
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [
        Author, Category, Post,  
        Table_Ogrenci ,
        Table_Ogretmen,
        Table_Sinif,
        Table_Sinif_Ogrenci,
        Table_Paylasim,
        Table_Sinavlar,
        Table_Soru_Turu
      ]
    });

    return createConnection(dbOptions);
  }
}
