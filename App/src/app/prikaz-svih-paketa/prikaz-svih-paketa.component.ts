import { Component, OnInit } from '@angular/core';
import { Paket } from '../paket';
import { Operater } from '../operater';
import { ServisService } from '../servis.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prikaz-svih-paketa',
  templateUrl: './prikaz-svih-paketa.component.html',
  styleUrls: ['./prikaz-svih-paketa.component.css']
})
export class PrikazSvihPaketaComponent implements OnInit {

  items:Paket[] = [];
  items2:Operater[] = [];
  dodajForm;

  constructor(private service:ServisService, 
    private router:Router,
    private formBuilder:FormBuilder) {

        this.dodajForm = this.formBuilder.group({
          id: 0,
          operaterId: 0,
          naziv: "",
          cena: 0
        }as Paket);
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviPakete().subscribe(data => this.items = data);
    this.service.dobaviOperatere().subscribe(data => this.items2 = data);
  }

  obrisi(id){
    this.service.obrisiPaket(id).subscribe(data => this.dobaviSve());
  }

  dodaj(item){
    item.operaterId = parseInt(item.operaterId);
    this.service.dodajPaket(item).subscribe(data => this.dobaviSve());
  }

  detalji(id){
    this.router.navigate(["prikazPaketa/prikazDetalja", {id:id}]);

  }

}
