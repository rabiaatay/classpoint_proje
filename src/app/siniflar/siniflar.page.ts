import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Table_Sinif } from '../entities/table_sinif';
import { UserService } from '../user.service';
import { getRepository, Repository} from "typeorm";
import {getConnection} from "typeorm";
import { Router } from '@angular/router';
import { Table_Ogretmen } from '../entities/table_ogretmen';
import { Table_Paylasim } from '../entities/table_paylasim';

@Component({
  selector: 'app-siniflar',
  templateUrl: './siniflar.page.html',
  styleUrls: ['./siniflar.page.scss'],
})
export class SiniflarPage implements OnInit {

  kullaniciMail
  kullaniciID
  password
  siniflar
  tumSiniflar:any =[]
  Siniflar: any=[]
  ogretmen: Promise<void>;
  ogretmenAd: any;
  ogretmenSoyad: any;
  renk: string;
  
  constructor(public service: UserService,
    private alertCtrl: AlertController,
    public router:Router) 
  {
    this.kullaniciMail=this.service.getUsername()
    this.kullaniciID=this.service.getUID()
    this.sınıfGetir();
    this.ogretmenGetir();
    this.getRandomColor();

 

  }

  ngOnInit() {
  }

  sinifaGit(sinifID:string){
    this.router.navigate(['/ogretmenanasayfa/sinif/'+sinifID])
  }

  async sınıfGetir(){
    this.siniflar = getConnection()
    .createQueryBuilder()
    .select("Table_Sinif")
    .from(Table_Sinif, "Table_Sinif")
    .where("Table_Sinif.sinif_olusturan_ogretmen = :sinif_olusturan_ogretmen ", { sinif_olusturan_ogretmen : this.kullaniciMail } )
    .getRawMany()
    .then((data:any)=>{
      this.tumSiniflar = data;
      this.Siniflar=this.tumSiniflar;
      console.log(this.tumSiniflar)
    })
  }

  getItems(ev){
    this.tumSiniflar=this.Siniflar;
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.tumSiniflar = this.tumSiniflar.filter((item) => {
        return (item.Table_Sinif_sinif_ad.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    this.renk =  '#' + ('000000' + color).slice(-6);
  }


  //secilen sınıfı listeden siler
  async sinifSil(sinifid){
    getConnection()
    .createQueryBuilder()
    .delete()
    .from(Table_Sinif)
    .where("id = :id", { id: sinifid })
    .execute();

    this.sınıfGetir();
  }

  async ogretmenGetir(){
    this.ogretmen = getConnection()
    .createQueryBuilder()
    .select("Table_Ogretmen")
    .from(Table_Ogretmen, "Table_Ogretmen")
    .where("Table_Ogretmen.id = :id ", { id : this.kullaniciID } )
    .getRawOne()
    .then((data:any)=>{
      this.ogretmenAd = data.Table_Ogretmen_ogretmen_ad;
      this.ogretmenSoyad = data.Table_Ogretmen_ogretmen_soyad;
      console.log(this.ogretmen)
    })

  }

  //sayfa yenileme
  doRefresh(refresher){
    setTimeout(() => {
      this.sınıfGetir();
      refresher.target.complete();
    },1000);
  }
  
  //random sifre olusturma
  async randomSifre(){
    var generator = require('generate-password');
    this.password = generator.generate({
        length: 7,
        numbers: true
    });
  }

  //sınıf olusturma alerti 
  async sinifOlustur(){
    const alert = await this.alertCtrl.create({
      header: 'Sınıf Oluştur',
      inputs: [
        {
          name: 'sinifAd',
          type: 'text',
          placeholder: 'Sınıf adı giriniz'
        },
        {
          name: 'sinifBolum',
          type: 'text',
          placeholder: 'Bölüm giriniz'
        }
      ],
      buttons: [
        {
          text: 'İptal',
          role: 'iptal',
          cssClass: 'secondary',
          handler: () => {
            console.log('İşlem iptal edildi.');
          }
        }, 
        {
          text: 'Oluştur',
          handler: (alertData) => {
            if (alertData.sinifAd=="" && alertData.sinifBolum=="") {
              this.alertGoster("UYARI", "Boş alan bırakmayınız") 
            } 
            else {
              this.randomSifre();

              const yeni_sinif = new Table_Sinif();
              yeni_sinif.sinif_ad = alertData.sinifAd;
              yeni_sinif.sinif_bolum =  alertData.sinifBolum;
              yeni_sinif.sinif_kod = this.password;
              yeni_sinif.sinif_olusturan_id = this.kullaniciID;
              yeni_sinif.sinif_olusturan_ogretmen = this.kullaniciMail;
              yeni_sinif.renk = this.renk;
            
              const sinif_ekle = getRepository(Table_Sinif);
              sinif_ekle.save(yeni_sinif);

              console.log(yeni_sinif)
              this.alertGoster("Bilgilendirme", "Sınıf kodu: " + yeni_sinif.sinif_kod)
              
              setTimeout(() => {
                this.sınıfGetir();
              },500);
           
            }
          }
        }
      ]
      
    });
    await alert.present();
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
