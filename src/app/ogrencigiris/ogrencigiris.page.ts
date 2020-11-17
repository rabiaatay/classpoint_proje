import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Table_Ogrenci } from 'src/app/entities/table_ogrenci';
import {getConnection} from "typeorm";
import { Table_Paylasim } from '../entities/table_paylasim';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ogrencigiris',
  templateUrl: './ogrencigiris.page.html',
  styleUrls: ['./ogrencigiris.page.scss'],
})
export class OgrencigirisPage implements OnInit {

  mailAdresi
  sifre: any;

  constructor(private router: Router,
    private alertCtrl: AlertController,
    public service: UserService,) 
  { 

     getConnection()
    .createQueryBuilder()
    .select("Table_Ogrenci")
    .from(Table_Ogrenci, "Table_Ogrenci")
    .getRawMany()
    .then((data:any)=>{
      
      console.log(data)
    })

  }

  ngOnInit() {
  }


  //kayıt sayfasına yönlendirme
  async KayitOl(){
    this.router.navigateByUrl('/kayitol');
  }

  //ogrenci giriş kontrolü
  async girisYap(){

    const ogrenciler = getConnection()
    .createQueryBuilder()
    .select("Table_Ogrenci")
    .from(Table_Ogrenci, "Table_Ogrenci")
    .where("Table_Ogrenci.ogrenci_mail = :ogrenci_mail ", { ogrenci_mail : this.mailAdresi } )
    .getRawOne()
    .then((data:any)=>{
      if (data) {
        const data_sifre = data.Table_Ogrenci_ogrenci_sifre
        if (data_sifre == this.sifre) {
          this.service.setUser({
            kullanici:data.Table_Ogrenci_ogrenci_mail,
            id:data.Table_Ogrenci_id
          })
          this.router.navigateByUrl('/ogrencianasayfa');
        } 
        else {
          this.alertGoster(data.Table_Ogrenci_ogrenci_mail + " için yanlış şifre", 
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
