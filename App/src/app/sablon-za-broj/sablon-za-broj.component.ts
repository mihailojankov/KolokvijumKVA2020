import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sablon-za-broj',
  templateUrl: './sablon-za-broj.component.html',
  styleUrls: ['./sablon-za-broj.component.css']
})
export class SablonZaBrojComponent implements OnInit {

  options:boolean = false;
  prvaTri:string = "";
  
  @Input()
  broj:string;




  constructor() { }

  ngOnInit(): void {
    this.transformText();
  }

  transformText(){
    for(let i = 0; i < this.broj.length;i++){
      if(i<3){
        this.prvaTri = this.prvaTri + this.broj[i];
      }
      else{
        this.prvaTri += "#";
      }
    }
  }


}
