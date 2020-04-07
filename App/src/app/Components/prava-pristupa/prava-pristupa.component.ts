import { Component, OnInit } from '@angular/core';
import { PravoPristupa } from 'src/app/Interfaces/pravo-pristupa';
import { PravoPristupaService } from 'src/app/Services/pravo-pristupa.service';
import { Router } from '@angular/router';
import { PravoPristupaComponent } from '../pravo-pristupa/pravo-pristupa.component';

@Component({
  selector: 'app-prava-pristupa',
  templateUrl: './prava-pristupa.component.html',
  styleUrls: ['./prava-pristupa.component.css']
})
export class PravaPristupaComponent implements OnInit {

  pravaPristupa:PravoPristupa[];
  naziv:string;

  constructor(public service:PravoPristupaService, public router:Router) { }

  ngOnInit(): void {
    this.pravaPristupa = [];
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviSve().subscribe( data => this.pravaPristupa = data);
  }

  obrisi(id){
    this.service.obrisi(id).subscribe( ()=> this.dobaviSve());
  }

  dodaj(){
    let dodatoPravoPristupa = {id:0, naziv:this.naziv}as PravoPristupa;
    this.service.dodaj(dodatoPravoPristupa).subscribe(()=>this.dobaviSve());
  }
}
