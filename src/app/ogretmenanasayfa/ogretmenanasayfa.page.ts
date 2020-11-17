import { Component, OnInit, ViewChild } from '@angular/core';
import {IonTabs} from '@ionic/angular'

@Component({
  selector: 'app-ogretmenanasayfa',
  templateUrl: './ogretmenanasayfa.page.html',
  styleUrls: ['./ogretmenanasayfa.page.scss'],
})
export class OgretmenanasayfaPage implements OnInit {
  @ViewChild('tabs') tabs:IonTabs
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tabs.select('siniflar')
  }
}
