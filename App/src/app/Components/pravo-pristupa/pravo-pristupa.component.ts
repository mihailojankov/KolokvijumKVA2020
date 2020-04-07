import { Component, OnInit } from '@angular/core';
import { PravoPristupa } from 'src/app/Interfaces/pravo-pristupa';
import { PravoPristupaService } from 'src/app/Services/pravo-pristupa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pravo-pristupa',
  templateUrl: './pravo-pristupa.component.html',
  styleUrls: ['./pravo-pristupa.component.css']
})
export class PravoPristupaComponent implements OnInit {

  k:PravoPristupa;

  constructor(public service:PravoPristupaService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.k = {}as PravoPristupa;
    this.dobaviPoId();
  }

  dobaviPoId(){
    this.service.dobaviPoId(this.route.snapshot.queryParams["id"]).subscribe( data => this.k = data);
  }

}
