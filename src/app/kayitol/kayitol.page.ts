import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getRepository, Repository} from "typeorm";

import { Table_Ogrenci } from 'src/app/entities/table_ogrenci';
import { Table_Ogretmen } from '../entities/table_ogretmen';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-kayitol',
  templateUrl: './kayitol.page.html',
  styleUrls: ['./kayitol.page.scss'],
})
export class KayitolPage implements OnInit {
  chk;
  ad
  soyad
  mailAdresi
  sifre
  sifreTekrari

  constructor(public router:Router,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
  }

  onChangeHandler($event) { //öğrenci mi öğretmen mi radiobox seçimi
    this.chk = $event.target.value;
    console.log(this.chk)
  }

  async iptal(){ // anasayfaya yönlendirme
    this.router.navigate(['/anasayfa']);
  }

  async kayitOl(){ // veritabanına kullanıcı kaydı
    if (this.ad== null || this.soyad== null|| this.mailAdresi==null || this.sifre==null || this.sifreTekrari==null) {
      this.alertGoster("Uyarı", "Boş alan bırakmayınız.")
    } 
    else{
      if (this.chk == null) {
        this.alertGoster("Uyarı", "Lütfen seçim yapınız.")
      }
    }
    
    if (this.sifre == this.sifreTekrari) {
      if (this.chk == "isChecked1"){ // öğrenci kaydı
        const yeni_ogrenci = new Table_Ogrenci();
        yeni_ogrenci.ogrenci_ad = this.ad;
        yeni_ogrenci.ogrenci_soyad =  this.soyad;
        yeni_ogrenci.ogrenci_mail = this.mailAdresi;
        yeni_ogrenci.ogrenci_sifre = this.sifre;
        const ogrenci_ekle = getRepository(Table_Ogrenci);
        await ogrenci_ekle.save(yeni_ogrenci);
        this.router.navigate(['/anasayfa']);
      } 
        
      if (this.chk == "isChecked2"){ // öğretmen kaydı
        const yeni_ogretmen = new Table_Ogretmen();
        yeni_ogretmen.ogretmen_ad = this.ad;
        yeni_ogretmen.ogretmen_soyad =  this.soyad;
        yeni_ogretmen.ogretmen_mail = this.mailAdresi;
        yeni_ogretmen.ogretmen_sifre = this.sifre;    
        const ogretmen_ekle = getRepository(Table_Ogretmen);
        await ogretmen_ekle.save(yeni_ogretmen);
        this.router.navigate(['/anasayfa']);
      }
    }
    else{
      this.alertGoster("HATA", "Şifreler aynı değil.")
    }
  }


  async alertGoster(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons:["TAMAM"]

    });
    await alert.present();
  }

  
}
