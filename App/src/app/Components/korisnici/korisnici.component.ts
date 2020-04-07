import { Component, OnInit } from '@angular/core';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/Interfaces/korisnik';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  korisnici:Korisnik[];

  korisnickoIme:string;
  email:string;
  lozinka:string;

  constructor(public service:KorisnikService, public router:Router) { }

  ngOnInit(): void {
    this.korisnici = [];
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviSve().subscribe( data => this.korisnici = data);
  }

  obrisi(id){
    this.service.obrisi(id).subscribe( ()=> this.dobaviSve());
  }

  dodaj(){
    let obj = {id:0, korisnickoIme:this.korisnickoIme, email:this.email, lozinka:this.lozinka}as Korisnik;
    this.service.dodaj(obj).subscribe(()=> this.dobaviSve());
  }

}
