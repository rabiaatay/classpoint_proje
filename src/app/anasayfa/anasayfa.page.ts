import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.page.html',
  styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async KayitOl(){
    this.router.navigateByUrl('/kayitol');
  }

  async ogrenciGiris(){
    this.router.navigateByUrl('/ogrencigiris');
  }

  async ogretmenGiris(){
    this.router.navigateByUrl('/ogretmengiris');
  }

}
