import { Component, OnInit, Input } from '@angular/core';
import { PravoPristupa } from 'src/app/Interfaces/pravo-pristupa';

@Component({
  selector: 'app-p',
  templateUrl: './pravo-pristupa-sablon.component.html',
  styleUrls: ['./pravo-pristupa-sablon.component.css']
})
export class PravoPristupaSablonComponent implements OnInit {

  @Input()
  p:PravoPristupa;

  constructor() {
    this.p = {}as PravoPristupa;
   }

  ngOnInit(): void {
  }

}
