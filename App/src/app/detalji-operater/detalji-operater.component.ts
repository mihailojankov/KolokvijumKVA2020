import { Component, OnInit } from '@angular/core';
import { Operater } from '../operater';
import { ServisService } from '../servis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detalji-operater',
  templateUrl: './detalji-operater.component.html',
  styleUrls: ['./detalji-operater.component.css']
})
export class DetaljiOperaterComponent implements OnInit {

  item:Operater = {}as Operater;
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
    this.service.detaljiOperater(this.route.snapshot.params["id"]).subscribe(data =>{
      this.item = data;

      this.izmeniForm = this.formBuilder.group({
        id:this.item.id,
        naziv:this.item.naziv,
        pozivniBroj:this.item.pozivniBroj
      }as Operater);
    });
  }

  izmeni(item){
    this.service.izmenaOperater(item).subscribe(data => this.item = data);
  }

}
