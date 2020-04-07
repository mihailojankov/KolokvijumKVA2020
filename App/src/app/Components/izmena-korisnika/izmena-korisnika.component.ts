import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/Interfaces/korisnik';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-izmena-korisnika',
  templateUrl: './izmena-korisnika.component.html',
  styleUrls: ['./izmena-korisnika.component.css']
})
export class IzmenaKorisnikaComponent implements OnInit {
  k:Korisnik;

  korisnickoIme:string;
  email:string;
  lozinka:string;

  constructor(public service:KorisnikService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.k = {}as Korisnik;
    this.korisnickoIme = "";
    this.email = "";
    this.lozinka = "";
    this.dobaviPoId();
  }

  dobaviPoId(){
    this.service.dobaviPoId(this.route.snapshot.queryParams["id"]).subscribe( data => this.k = data);
  }

  izmeni(){
    if(this.korisnickoIme !=""){this.korisnickoIme = this.korisnickoIme};
    if(this.email !=""){this.k.email= this.email};
    if(this.lozinka !=""){this.k.lozinka= this.lozinka};

    let izmenjenKorisnik = {id:this.k.id, korisnickoIme:this.k.korisnickoIme, email:this.k.email, lozinka:this.k.lozinka}as Korisnik;
    this.service.izmeni(izmenjenKorisnik).subscribe(() => this.router.navigate(["/korisnici"]));
  }

}
