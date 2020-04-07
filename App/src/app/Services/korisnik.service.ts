import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Korisnik } from '../Interfaces/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  adresa:string = "http://localhost:3000/korisnik";
  constructor(public http:HttpClient) { }

  dobaviSve():Observable<Korisnik[]>{
    return this.http.get<Korisnik[]>(this.adresa);
  }

  dobaviPoId(id):Observable<Korisnik>{
    return this.http.get<Korisnik>(this.adresa + "/" + id);
  }

  dodaj(obj):Observable<Korisnik>{
    return this.http.post<Korisnik>(this.adresa, obj);
  }

  izmeni(obj):Observable<Korisnik>{
    return this.http.put<Korisnik>(this.adresa + "/" + obj.id, obj);
  }

  obrisi(id):Observable<Korisnik>{
    return this.http.delete<Korisnik>(this.adresa + "/" + id);
  }
  
}
