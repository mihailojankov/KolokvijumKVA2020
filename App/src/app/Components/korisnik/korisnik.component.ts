import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/Interfaces/korisnik';
import { KorisnikService } from 'src/app/Services/korisnik.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  k:Korisnik;

  constructor(public service:KorisnikService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.k = {}as Korisnik;
    this.dobaviPoId();
  }

  dobaviPoId(){
    this.service.dobaviPoId(this.route.snapshot.queryParams["id"]).subscribe( data => this.k = data);
  }

}
