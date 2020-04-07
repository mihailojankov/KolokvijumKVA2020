import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DodeljenoPravo } from '../Interfaces/dodeljeno-pravo';

@Injectable({
  providedIn: 'root'
})
export class DodeljenoPravoService {

  adresa:string = "http://localhost:3000/dodeljenoPravo";
  constructor(public http:HttpClient) { }

  dobaviSve():Observable<DodeljenoPravo[]>{
    return this.http.get<DodeljenoPravo[]>(this.adresa);
  }

  dobaviPoId(id):Observable<DodeljenoPravo>{
    return this.http.get<DodeljenoPravo>(this.adresa + "/" + id);
  }

  dodaj(obj):Observable<DodeljenoPravo>{
    return this.http.post<DodeljenoPravo>(this.adresa, obj);
  }

  izmeni(obj):Observable<DodeljenoPravo>{
    return this.http.put<DodeljenoPravo>(this.adresa + "/" + obj.id, obj);
  }

  obrisi(id):Observable<DodeljenoPravo>{
    return this.http.delete<DodeljenoPravo>(this.adresa + "/" + id);
  }
}
