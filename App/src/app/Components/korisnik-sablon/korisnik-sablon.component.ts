import { Component, OnInit, Input } from '@angular/core';
import { Korisnik } from 'src/app/Interfaces/korisnik';

@Component({
  selector: 'app-k',
  templateUrl: './korisnik-sablon.component.html',
  styleUrls: ['./korisnik-sablon.component.css']
})
export class KorisnikSablonComponent implements OnInit {

  @Input()
  k:Korisnik;

  constructor() {   
    this.k = {}as Korisnik;
  }

  ngOnInit(): void {
  }

}
