import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { getConnection } from 'typeorm';
import { UserService } from '../user.service';
import { Table_Sinavlar } from '../entities/table_sinavlar';
import { zip } from 'rxjs';
@Component({
  selector: 'app-sinav-olustur',
  templateUrl: './sinav-olustur.page.html',
  styleUrls: ['./sinav-olustur.page.scss'],
})
export class SinavOlusturPage implements OnInit {

  sinavID
  kullaniciMail: string;
  kullaniciID: string;
  sinav
  sinavBaslik: any;
  sinavTarih: any;
  sinavSaat: any;
  sinavSure: any;
  sinavOlusturanID: any;
  sayilar: any=[];
  sayi: number;
  say
  dizi: any=[];
  diziCevap: any=[];
  renk: any;
  cevap: number;
  cevaplar: any=[];
  cev: any;
  diziCevp: any=[];
  inputTexts: string[] = [];
  inputCevap: any = [];
  pet

  constructor(public service: UserService,
    private route:ActivatedRoute,
    private alertCtrl: AlertController,
    public router:Router,
    public toastCtrl: ToastController) {

    this.sinavID=this.route.snapshot.paramMap.get('id') //secilen sinavın id'si
    this.kullaniciMail=this.service.getUsername() //ogretmen maili
    this.kullaniciID = this.service.getUID() // gelen kişi id
    this.soruSayisi();
    this.cevapSayisi();
    this.sinavGetir();

    this.pet= "ayrintilar"
 

    

   }

  ngOnInit() {
  }

  radioGroupChange(event){
    console.log(event.detail.value);
  }

  async sinavGetir(){
    //sınav bilgilerini veritabanından getirir.
    this.sinav = getConnection()
    .createQueryBuilder()
    .select("Table_Sinavlar")
    .from(Table_Sinavlar, "Table_Sinavlar")
    .where("Table_Sinavlar.id = :id", { id: this.sinavID })
    .getRawOne()
    .then((data:any)=>{
      this.sinavBaslik = data.Table_Sinavlar_sinav_baslik;
      this.sinavTarih = data.Table_Sinavlar_sinav_tarih;
      this.sinavSaat = data.Table_Sinavlar_sinav_saat;
      this.sinavSure = data.Table_Sinavlar_sinav_sure;
      this.sinavOlusturanID = data.Table_Sinavlar_sinav_olusturan_id;
    })

  }

  async sinavGuncelle(){
    getConnection()
    .createQueryBuilder()
    .update(Table_Sinavlar)
    .set({sinav_baslik: this.sinavBaslik, 
          sinav_tarih: this.sinavTarih,
          sinav_saat: this.sinavSaat,
          sinav_sure: this.sinavSure })
    .where("id = :id", { id: this.sinavID })
    .execute();

    this.sinavGetir();

  }


  //soru sayısı secimi
  selectCategory(say){
    this.say = say; //populate here
    if (this.dizi.length == 0 || this.dizi.length == say) {
      for (let index = 0; index < this.say; index++) {
        this.dizi[index] = (index);
      }
    }
    if (this.dizi.length < say || this.dizi.length > say  ) {
      this.toastGoster("Soru sayısı zaten seçili");
    } 
  }

  selectCategoryCevap(cev){
    this.cev = cev; //populate here
    if (this.diziCevap.length == 0 || this.diziCevap.length == cev) {
      for (let index = 0; index < this.cev; index++) {
        this.diziCevap[index] = this.diziCevp[index];
      }
    }
    if (this.diziCevap.length < cev || this.diziCevap.length > cev  ) {
      this.toastGoster("Şık sayısı zaten seçili");
    } 
  }

  //soru sayısı olusturur
  async soruSayisi(){
    for (this.sayi = 0; this.sayi < 100; this.sayi++) {
      this.sayilar[this.sayi] = (this.sayi+1);
    }
  }

  //şık sayısı olusturur
  async cevapSayisi(){
    this.diziCevp[0] = "A)";
    this.diziCevp[1] = "B)";
    this.diziCevp[2] = "C)";
    this.diziCevp[3] = "D)";
    this.diziCevp[4] = "E)";
    this.diziCevp[5] = "F)";
    this.diziCevp[6] = "G)";
    this.diziCevp[7] = "H)";
    this.diziCevp[8] = "I)";
    this.diziCevp[9] = "J)";
    for (this.cevap = 0; this.cevap < 10; this.cevap++) {
      this.cevaplar[this.cevap] = (this.cevap+1);
    }
  }

  async toastGoster(message:string){
    let toast = this.toastCtrl.create({
      message,
      duration: 2000,
      position:'bottom'
    });
    (await toast).present();
  }

  //sayfa yenileme
  doRefresh(refresher){
    setTimeout(() => {
      //this.paylasimGetir();
      refresher.target.complete();
    },1000);
  }
  
  async sinavOlustur(){
  
  }

}
