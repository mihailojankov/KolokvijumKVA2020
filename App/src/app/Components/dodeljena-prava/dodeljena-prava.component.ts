import { Component, OnInit } from '@angular/core';
import { DodeljenoPravo } from 'src/app/Interfaces/dodeljeno-pravo';
import { Korisnik } from 'src/app/Interfaces/korisnik';
import { DodeljenoPravoService } from 'src/app/Services/dodeljeno-pravo.service';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { PravoPristupaService } from 'src/app/Services/pravo-pristupa.service';
import { PravoPristupa } from 'src/app/Interfaces/pravo-pristupa';

@Component({
  selector: 'app-dodeljena-prava',
  templateUrl: './dodeljena-prava.component.html',
  styleUrls: ['./dodeljena-prava.component.css']
})
export class DodeljenaPravaComponent implements OnInit {

  dodeljenaPrava:DodeljenoPravo[];
  korisnici:Korisnik[];
  pravaPristupa:PravoPristupa[];

  dodatKorisnik:number;
  dodatoPravoPristupa:number;
  datumDodele:string;
  datumOpoziva:string;

  constructor(public service:DodeljenoPravoService, public router:Router, public serviceK:KorisnikService, public serviceP:PravoPristupaService) { }

  ngOnInit(): void {
    this.pravaPristupa = [];
    this.korisnici = [];
    this.dodeljenaPrava = [];
    this.datumOpoziva = "";
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviSve().subscribe(data => this.dodeljenaPrava = data);
    this.serviceK.dobaviSve().subscribe(data => this.korisnici = data);
    this.serviceP.dobaviSve().subscribe( data => this.pravaPristupa = data);
  }

  obrisi(id){
    this.service.obrisi(id).subscribe( ()=> this.dobaviSve());
  }

  dodaj(){
    let dodeljenoPravo = {id:0, korisnikId:this.dodatKorisnik, pravoPristupaId:this.dodatoPravoPristupa, datumDodele:this.datumDodele, datumOpoziva:this.datumOpoziva}as DodeljenoPravo;
    this.service.dodaj(dodeljenoPravo).subscribe(() => this.dobaviSve());
  }

  pronadjiKorisnika(id):Korisnik{
    for(let i=0; i<this.korisnici.length;i++){
      if(this.korisnici[i].id == id){
        return this.korisnici[i];
      }
    }
  
  }

  pronadjiPravoPristupa(id):PravoPristupa{
    for(let i=0; i<this.pravaPristupa.length;i++){
      if(this.pravaPristupa[i].id == id){
        return this.pravaPristupa[i];
      }
    }
  
  }

}
