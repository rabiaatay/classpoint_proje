import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Table_Ogretmen } from '../entities/table_ogretmen';
import {getConnection} from "typeorm";
import { UserService } from '../user.service';
import { Table_Paylasim } from '../entities/table_paylasim';

@Component({
  selector: 'app-ogretmengiris',
  templateUrl: './ogretmengiris.page.html',
  styleUrls: ['./ogretmengiris.page.scss'],
})
export class OgretmengirisPage implements OnInit {

  mailAdresi
  sifre

  constructor(private router: Router,
    private alertCtrl: AlertController,
    public service:UserService)
  {
    getConnection()
    .createQueryBuilder()
    .select("Table_Ogretmen")
    .from(Table_Ogretmen, "Table_Ogretmen")
    .getRawMany()
    .then((data:any)=>{
      
      console.log(data)
    })

 
   }

  ngOnInit() {
  }

  //kayıt sayfasına yonlendirme
  async KayitOl(){
    this.router.navigateByUrl('/kayitol');
  }

  //ogretmen giris kontrolü
  async girisYap(){
    
    const ogretmenler =  getConnection()
    .createQueryBuilder()
    .select("Table_Ogretmen")
    .from(Table_Ogretmen, "Table_Ogretmen")
    .where("Table_Ogretmen.ogretmen_mail = :ogretmen_mail ", { ogretmen_mail : this.mailAdresi } )
    .getRawOne()
    .then((data:any)=>{
      if (data) {
        const data_sifre = data.Table_Ogretmen_ogretmen_sifre
        if (data_sifre == this.sifre) {
          this.service.setUser({
            kullanici:data.Table_Ogretmen_ogretmen_mail,
            id:data.Table_Ogretmen_id
          })
          this.router.navigateByUrl('/ogretmenanasayfa');
        } 
        else {
          this.alertGoster(data.Table_Ogretmen_ogretmen_mail + " için yanlış şifre", 
          "Girdiğiniz şifre yanlış. Lütfen tekrar deneyiniz.")
        } 
       
       
      } 
      else {
        this.alertGoster(this.mailAdresi + " için kullanıcı bulunamadı", 
        "Girdiğiniz mail adresine kayıtlı kullanıcı bulunamadı. Lütfen tekrar deneyiniz.")
      }
    })

  }

    //alert 
    async alertGoster(header:string,message:string){
      const alert = await this.alertCtrl.create({
        header,
        message,
        buttons:["Tekrar Dene"]
      });
      await alert.present();
    }

}
