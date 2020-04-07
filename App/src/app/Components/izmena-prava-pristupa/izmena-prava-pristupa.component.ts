import { Component, OnInit } from '@angular/core';
import { PravoPristupa } from 'src/app/Interfaces/pravo-pristupa';
import { ActivatedRoute, Router } from '@angular/router';
import { PravoPristupaService } from 'src/app/Services/pravo-pristupa.service';

@Component({
  selector: 'app-izmena-prava-pristupa',
  templateUrl: './izmena-prava-pristupa.component.html',
  styleUrls: ['./izmena-prava-pristupa.component.css']
})
export class IzmenaPravaPristupaComponent implements OnInit {

  k:PravoPristupa;

  naziv:string;

  constructor(public service:PravoPristupaService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.k = {}as PravoPristupa;
    this.naziv = "";
    this.dobaviPoId();
  }

  dobaviPoId(){
    this.service.dobaviPoId(this.route.snapshot.queryParams["id"]).subscribe( data => this.k = data);
  }

  izmeni(){
    if(this.naziv !=""){this.k.naziv= this.naziv};

    let izmenjenoPravoPristupa = {id:this.k.id, naziv:this.k.naziv}as PravoPristupa;
    this.service.izmeni(izmenjenoPravoPristupa).subscribe(() => this.router.navigate(["/pravaPristupa"]));
  }

}
