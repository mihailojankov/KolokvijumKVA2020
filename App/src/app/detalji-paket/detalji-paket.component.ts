import { Component, OnInit } from '@angular/core';
import { Paket } from '../paket';
import { Operater } from '../operater';
import { ServisService } from '../servis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Korisnik } from '../korisnik';

@Component({
  selector: 'app-detalji-paket',
  templateUrl: './detalji-paket.component.html',
  styleUrls: ['./detalji-paket.component.css']
})
export class DetaljiPaketComponent implements OnInit {

  item:Paket = {}as Paket;

  items:Operater[] = [];
  izmeniForm;

  //4. zadatak
  korisniciZaPaket:Korisnik[] = [];


  constructor(private service:ServisService, 
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) {
        
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.detaljiPaket(this.route.snapshot.params["id"]).subscribe(data =>{
      this.item = data;

      this.izmeniForm = this.formBuilder.group({
        id:this.item.id,
        operaterId:this.item.operaterId,
        naziv:this.item.naziv,
        cena:this.item.cena
      }as Paket);

      
    });
    this.service.dobaviOperatere().subscribe(data => this.items = data);
    this.service.dobaviSveKorisnikeZaIdPaketa(this.route.snapshot.params["id"]).subscribe(data => this.korisniciZaPaket = data);
  }

  izmeni(item){
    item.operaterId = parseInt(item.operaterId);
    this.service.izmenaPaket(item).subscribe(data => this.item = data);
  }

}
