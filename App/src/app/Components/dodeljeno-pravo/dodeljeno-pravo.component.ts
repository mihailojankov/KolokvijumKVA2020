import { Component, OnInit } from '@angular/core';
import { DodeljenoPravo } from 'src/app/Interfaces/dodeljeno-pravo';
import { DodeljenoPravoService } from 'src/app/Services/dodeljeno-pravo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { PravoPristupaService } from 'src/app/Services/pravo-pristupa.service';
import { KorisnikComponent } from '../korisnik/korisnik.component';
import { Korisnik } from 'src/app/Interfaces/korisnik';
import { PravoPristupa } from 'src/app/Interfaces/pravo-pristupa';

@Component({
  selector: 'app-dodeljeno-pravo',
  templateUrl: './dodeljeno-pravo.component.html',
  styleUrls: ['./dodeljeno-pravo.component.css']
})
export class DodeljenoPravoComponent implements OnInit {

  k:DodeljenoPravo;
  korisnici:Korisnik[];
  pravaPristupa:PravoPristupa[];
  

  constructor(public service:DodeljenoPravoService, public router:Router, public serviceK:KorisnikService, public serviceP:PravoPristupaService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.k = {}as DodeljenoPravo;
    this.dobaviPoId();
  }

  dobaviPoId(){
    this.service.dobaviPoId(this.route.snapshot.queryParams["id"]).subscribe( data => this.k = data);
    this.serviceK.dobaviSve().subscribe(data => this.korisnici = data);
    this.serviceP.dobaviSve().subscribe( data => this.pravaPristupa = data);
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
