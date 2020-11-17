import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getConnection, getRepository } from 'typeorm';
import { Table_Paylasim } from '../entities/table_paylasim';
import { Table_Sinif } from '../entities/table_sinif';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sinif-ogrenci',
  templateUrl: './sinif-ogrenci.page.html',
  styleUrls: ['./sinif-ogrenci.page.scss'],
})
export class SinifOgrenciPage implements OnInit {
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
  renk: any;
  today: string;

  constructor(public service: UserService,
    private route:ActivatedRoute,
    private alertCtrl: AlertController) { 

    this.sinifID=this.route.snapshot.paramMap.get('id') //secilen sinif id'si
    this.kullaniciMail=this.service.getUsername() //ogrenci maili
    this.kullaniciID = this.service.getUID() // gelen kişi id
    
    //secilen sınıfı veritabanından ceker
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

  //sayfa yenileme
  doRefresh(refresher){
  setTimeout(() => {
    this.paylasimGetir();
    refresher.target.complete();
  },1000);
  }

  //paylasımları veritabanından ceker
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

  suanTarihi(){
    const now = new Date();
    const date = now.toISOString();
    this.today = date.split('T')[0]; 
    //  console.log(this.today)
  }

  //veritabanına yeni paylaşım ekler
  async paylas(){
      this.suanTarihi();

      const yeni_paylasim = new Table_Paylasim();
      yeni_paylasim.paylasilan_sinif_id = this.sinifID
      yeni_paylasim.paylasan_kisi_id = this.kullaniciID
      yeni_paylasim.paylasim_text = this.paylasim
      yeni_paylasim.paylasan_kisi_mail = this.kullaniciMail
      yeni_paylasim.paylasim_tarih = this.today;
    
      const paylasim_ekle = getRepository(Table_Paylasim);
      paylasim_ekle.save(yeni_paylasim);
      console.log(yeni_paylasim)   

      setTimeout(() => {
        this.paylasimGetir();
      },500);   
      
      this.paylasim = "";
  }

  //alert
  async alertGoster(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons:["TAMAM"]
    });
    await alert.present();
  }


  

}

