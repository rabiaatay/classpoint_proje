import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { createQueryBuilder, getConnection } from 'typeorm';
import { Table_Sinif } from '../entities/table_sinif';
import { Table_Sinif_Ogrenci } from '../entities/table_sinif_ogrenci';
import { UserService } from '../user.service';
import { getRepository, Repository} from "typeorm";
import { Table_Ogrenci } from '../entities/table_ogrenci';

@Component({
  selector: 'app-siniflar-ogrenci',
  templateUrl: './siniflar-ogrenci.page.html',
  styleUrls: ['./siniflar-ogrenci.page.scss'],
})
export class SiniflarOgrenciPage implements OnInit {

  kullaniciMail
  kullaniciID
  siniflar
  tumSiniflar:any =[]
  Siniflar:any = []
  katilinan_sinif_id
  katilinan_sinif: any =[];
  ogrenci: Promise<void>;
  ogrenciAd: any;
  ogrenciSoyad: any;

  constructor(public service: UserService,
    private alertCtrl: AlertController,
    public router:Router,
    public toastCtrl: ToastController) 
  { 
    this.kullaniciMail=this.service.getUsername()
    this.kullaniciID=this.service.getUID()

    this.sınıfGetir();
    this.ogrenciGetir();
    
    this.siniflar = getConnection()
    .createQueryBuilder()
    .select("Table_Sinif")
    .from(Table_Sinif, "Table_Sinif")
    .getRawMany()
    .then((data:any)=>{
      console.log(data)
    })

  }

  ngOnInit() {
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

  async sinifSil(sinifid){
    getConnection()
    .createQueryBuilder()
    .delete()
    .from(Table_Sinif_Ogrenci)
    .where("sinif_ogrenci_sinif_id = :sinif_ogrenci_sinif_id", { sinif_ogrenci_sinif_id : sinifid })
    .andWhere("sinif_ogrenci_id = :sinif_ogrenci_id", { sinif_ogrenci_id : this.kullaniciID })
    .execute();

    this.sınıfGetir();
  }

  async toastGoster(message:string){
    let toast = this.toastCtrl.create({
      message,
      duration: 2000,
      position:'bottom'
    });
    (await toast).present();
  }


  //veritabanından ogrenci ceker
  async ogrenciGetir(){
    this.ogrenci = getConnection()
    .createQueryBuilder()
    .select("Table_Ogrenci")
    .from(Table_Ogrenci, "Table_Ogrenci")
    .where("Table_Ogrenci.id = :id ", { id : this.kullaniciID } )
    .getRawOne()
    .then((data:any)=>{
      this.ogrenciAd = data.Table_Ogrenci_ogrenci_ad;
      this.ogrenciSoyad = data.Table_Ogrenci_ogrenci_soyad;
    })
  }

  //secilen sınıfı sekmede ac
  sinifaGit(sinifID:string){
    this.router.navigate(['/ogrencianasayfa/sinif-ogrenci/'+sinifID])
  }

  //sayfa yenileme
  doRefresh(refresher){
    setTimeout(() => {
      this.sınıfGetir();
      refresher.target.complete();
    },1000);
  }

  //sınıfı veritabanından getirme fonksiyonu
  async sınıfGetir(){
    this.siniflar = await createQueryBuilder("Table_Sinif")
    .innerJoinAndSelect(Table_Sinif_Ogrenci, "Table_Sinif_Ogrenci", "Table_Sinif.id = Table_Sinif_Ogrenci.sinif_ogrenci_sinif_id")
    .where("Table_Sinif_Ogrenci.sinif_ogrenci_id = :sinif_ogrenci_id", { sinif_ogrenci_id: this.kullaniciID })
    .getRawMany()
    .then((veri:any)=>{
      this.tumSiniflar = veri;
      this.Siniflar=this.tumSiniflar;
      console.log(this.tumSiniflar)
    })
  }

  //sınıfa katılma alerti 
  async sinifaKatil(){
    const alert = await this.alertCtrl.create({
      header: 'Sınıfa Katıl',
      inputs: [
        {
          name: 'sinifKod',
          type: 'text',
          placeholder: 'Sınıf kodu giriniz'
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
          text: 'Katıl',
          handler: (alertData) => {
            if (alertData.sinifKod=="") {
              this.alertGoster("UYARI", "Boş alan bırakmayınız") 
            } 
            else {
             this.siniflar = getConnection()
              .createQueryBuilder()
              .select("Table_Sinif")
              .from(Table_Sinif, "Table_Sinif")
              .where("Table_Sinif.sinif_kod = :sinif_kod ", { sinif_kod : alertData.sinifKod } )
              .getRawOne()
              .then((data:any)=>{              
                const yeni_katilan_ogrenci = new Table_Sinif_Ogrenci();
                yeni_katilan_ogrenci.sinif_ogrenci_id = this.kullaniciID;
                yeni_katilan_ogrenci.sinif_ogrenci_sinif_id = data.Table_Sinif_id;
              
                const sinifa_ogrenci_ekle = getRepository(Table_Sinif_Ogrenci);
                sinifa_ogrenci_ekle.save(yeni_katilan_ogrenci);
                console.log(yeni_katilan_ogrenci)

                this.toastGoster("Sınıfa başarılı şekilde katıldınız");
                setTimeout(() => {
                  this.sınıfGetir();
                },500);
             
              }) 
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
