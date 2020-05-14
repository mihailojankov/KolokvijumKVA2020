import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik';
import { Paket } from '../paket';
import { ServisService } from '../servis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detalji-korisnik',
  templateUrl: './detalji-korisnik.component.html',
  styleUrls: ['./detalji-korisnik.component.css']
})
export class DetaljiKorisnikComponent implements OnInit {

  item:Korisnik = {}as Korisnik;

  items:Paket[] = [];
  izmeniForm;

  constructor(private service:ServisService, 
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) {
        
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.detaljiKorisnik(this.route.snapshot.params["id"]).subscribe(data =>{
      this.item = data;

      this.izmeniForm = this.formBuilder.group({
        id:this.item.id,
        broj:this.item.broj,
        paketId:this.item.paketId,
        datumPrijave:this.item.datumPrijave,
        datumOdjave:this.item.datumOdjave
      }as Korisnik);
    });
    this.service.dobaviPakete().subscribe(data => this.items = data);
  }

  izmeni(item){
    item.paketId = parseInt(item.paketId);
    this.service.izmenaKorisnik(item).subscribe(data => this.item = data);
  }

}
