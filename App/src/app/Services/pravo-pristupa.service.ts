import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PravoPristupa } from '../Interfaces/pravo-pristupa';

@Injectable({
  providedIn: 'root'
})
export class PravoPristupaService {

  adresa:string = "http://localhost:3000/pravoPristupa";
  constructor(public http:HttpClient) { }

  dobaviSve():Observable<PravoPristupa[]>{
    return this.http.get<PravoPristupa[]>(this.adresa);
  }

  dobaviPoId(id):Observable<PravoPristupa>{
    return this.http.get<PravoPristupa>(this.adresa + "/" + id);
  }

  dodaj(obj):Observable<PravoPristupa>{
    return this.http.post<PravoPristupa>(this.adresa, obj);
  }

  izmeni(obj):Observable<PravoPristupa>{
    return this.http.put<PravoPristupa>(this.adresa + "/" + obj.id, obj);
  }

  obrisi(id):Observable<PravoPristupa>{
    return this.http.delete<PravoPristupa>(this.adresa + "/" + id);
  }

  
}
