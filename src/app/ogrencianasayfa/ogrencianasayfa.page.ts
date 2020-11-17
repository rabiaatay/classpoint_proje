import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-ogrencianasayfa',
  templateUrl: './ogrencianasayfa.page.html',
  styleUrls: ['./ogrencianasayfa.page.scss'],
})
export class OgrencianasayfaPage implements OnInit {
  @ViewChild('tabs') tabs:IonTabs
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tabs.select('siniflar-ogrenci')
  }

}
