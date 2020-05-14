import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik';
import { Paket } from '../paket';
import { ServisService } from '../servis.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prikaz-svih-korisnika',
  templateUrl: './prikaz-svih-korisnika.component.html',
  styleUrls: ['./prikaz-svih-korisnika.component.css']
})
export class PrikazSvihKorisnikaComponent implements OnInit {

  items:Korisnik[] = [];
  items2:Paket[] = [];
  dodajForm;

  constructor(private service:ServisService, 
    private router:Router,
    private formBuilder:FormBuilder) {

        this.dodajForm = this.formBuilder.group({
          id: 0,
          broj: "",
          paketId: 0,
          datumPrijave: "",
          datumOdjave: ""
        }as Korisnik);
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviKorisnike().subscribe(data => this.items = data);
    this.service.dobaviPakete().subscribe(data => this.items2 = data);
  }

  obrisi(id){
    this.service.obrisiKorisnika(id).subscribe(data => this.dobaviSve());
  }

  dodaj(item){
    item.paketId = parseInt(item.paketId);
    this.service.dodajKorisnika(item).subscribe(data => this.dobaviSve());
  }

  detalji(id){
    this.router.navigate(["prikazKorisnika/prikazDetalja", {id:id}]);

  }

}
