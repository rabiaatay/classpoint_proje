import { Component, OnInit } from '@angular/core';
import { Table_Sinif } from '../entities/table_sinif';
import { UserService } from '../user.service';
import {getConnection, getRepository} from "typeorm";
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Table_Paylasim } from '../entities/table_paylasim';
import { Table_Sinavlar } from '../entities/table_sinavlar';

@Component({
  selector: 'app-sinif',
  templateUrl: './sinif.page.html',
  styleUrls: ['./sinif.page.scss'],
})
export class SinifPage implements OnInit {
  kullaniciID
  kullaniciMail
  sinif
  sinifAd
  sinifID
  sinifBolum
  sinifKodu 
  sinavlar: Promise<void>;
  paylasimlar: Promise<void>;
  paylasilinan_sinif: any;
  paylasim
  tum_paylasimlar: any =[];
  sinifId: any;
  renk: string;
  today: string;

  constructor(public service: UserService,
    private route:ActivatedRoute,
    private alertCtrl: AlertController,
    public router:Router) { 

    this.sinifID=this.route.snapshot.paramMap.get('id') //secilen sinif id'si
    this.kullaniciMail=this.service.getUsername() //ogretmen maili
    this.kullaniciID = this.service.getUID() // gelen kişi id
    
    this.sinif = getConnection()
    .createQueryBuilder()
    .select("Table_Sinif")
    .from(Table_Sinif, "Table_Sinif")
    .where("Table_Sinif.id = :id", { id: this.sinifID })
    .getRawOne()
    .then((data:any)=>{
      this.sinifAd = data.Table_Sinif_sinif_ad;
      this.sinifBolum = data.Table_Sinif_sinif_bolum;
      this.sinifKodu = data.Table_Sinif_sinif_kod;
      this.renk = data.Table_Sinif_renk;
    })

    this.paylasimGetir();

  }

  ngOnInit() {
  }

  suanTarihi(){
    const now = new Date();
    const date = now.toISOString();
    this.today = date.split('T')[0]; 
    console.log(this.today)
  }

  //sayfa yenileme
  doRefresh(refresher){
  setTimeout(() => {
    this.paylasimGetir();
    refresher.target.complete();
  },1000);
  }

  async yönlendir(){
    this.sinif = getConnection()
    .createQueryBuilder()
    .select("Table_Sinavlar")
    .from(Table_Sinavlar, "Table_Sinavlar")
    .orderBy("Table_Sinavlar.id", "DESC")
    .getRawOne()
    .then((data:any)=>{
      this.sinifId = data.Table_Sinavlar_id;
      console.log(this.sinifId)
      this.router.navigate(['/ogretmenanasayfa/sinav-olustur/'+(this.sinifId)])
    })
  }

  async sinavGetir(){
    getConnection()
    .createQueryBuilder()
    .select("Table_Sinavlar")
    .from(Table_Sinavlar, "Table_Sinavlar")
    .getRawMany()
    .then((data:any)=>{  
      console.log(data)
    })
  }

  async paylasimGetir(){
    this.sinif = getConnection()
    .createQueryBuilder()
    .select("Table_Paylasim")
    .from(Table_Paylasim, "Table_Paylasim")
    .where("Table_Paylasim.paylasilan_sinif_id = :paylasilan_sinif_id", { paylasilan_sinif_id: this.sinifID })
    .orderBy("Table_Paylasim.id", "DESC")
    .getRawMany()
    .then((data:any)=>{
      this.tum_paylasimlar = data;
      console.log(this.tum_paylasimlar)
    })
  }

  async paylas(){
      this.suanTarihi();
      
      const yeni_paylasim = new Table_Paylasim();
      yeni_paylasim.paylasilan_sinif_id = this.sinifID
      yeni_paylasim.paylasan_kisi_id = this.kullaniciID
      yeni_paylasim.paylasim_text = this.paylasim
      yeni_paylasim.paylasan_kisi_mail = this.kullaniciMail
      yeni_paylasim.paylasim_tarih = this.today
    
      const paylasim_ekle = getRepository(Table_Paylasim);
      paylasim_ekle.save(yeni_paylasim);
      console.log(yeni_paylasim) 
      
      setTimeout(() => {
        this.paylasimGetir();
      },500);  

      this.paylasim = "";
  }

  async sinavOlustur(){
    const alert = await this.alertCtrl.create({
      header: 'Sınav Oluştur',
      inputs: [
        {
          name: 'sinavBaslik',
          type: 'text',
          placeholder: 'Başlık giriniz'
        },
        {
          name: 'sinavTarih',
          type: 'date',
          placeholder: 'Tarih giriniz'
        },
        {
          name: 'sinavSaat',
          type: 'time',
          placeholder: 'Saat giriniz'
        },
        {
          name: 'sinavSure',
          type: 'number',
          placeholder: 'Süre giriniz (dk)'
        },
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
            if (alertData.sinavBaslik=="" && alertData.sinavTarih=="" && alertData.sinavSaat=="" && 
            alertData.sinavSure=="") {
              this.alertGoster("UYARI", "Boş alan bırakmayınız") 
            } 
            else {
                const yeni_sinif = new Table_Sinavlar();
                yeni_sinif.sinav_baslik = alertData.sinavBaslik;
                yeni_sinif.sinav_tarih = alertData.sinavTarih;
                yeni_sinif.sinav_saat = alertData.sinavSaat;
                yeni_sinif.sinav_sure = alertData.sinavSure;
                yeni_sinif.sinav_olusturan_id = this.kullaniciID;
             
                
              
                const sinav_ekle = getRepository(Table_Sinavlar);
                sinav_ekle.save(yeni_sinif);
                console.log(yeni_sinif);

                setTimeout(() => {
                  this.sinavGetir();
                  this.yönlendir();
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
