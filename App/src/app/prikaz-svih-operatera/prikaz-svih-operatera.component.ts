import { Component, OnInit } from '@angular/core';
import { Operater } from '../operater';
import { ServisService } from '../servis.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prikaz-svih-operatera',
  templateUrl: './prikaz-svih-operatera.component.html',
  styleUrls: ['./prikaz-svih-operatera.component.css']
})
export class PrikazSvihOperateraComponent implements OnInit {

  items:Operater[] = [];
  dodajForm;

  constructor(private service:ServisService, 
    private router:Router,
    private formBuilder:FormBuilder) {

        this.dodajForm = this.formBuilder.group({
          id: 0,
          naziv: "",
          pozivniBroj: ""
        }as Operater);
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviOperatere().subscribe(data => this.items = data);
    }

  obrisi(id){
    this.service.obrisiOperatera(id).subscribe(data => this.dobaviSve());
  }

  dodaj(item){
    this.service.dodajOperatera(item).subscribe(data => this.dobaviSve());
  }

  detalji(id){
    this.router.navigate(["prikazOperatera/prikazDetalja", {id:id}]);

  }

}
