import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operater } from './operater';
import { Paket } from './paket';
import { Korisnik } from './korisnik';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  adresa:string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }


  dobaviOperatere():Observable<Operater[]>{
    return this.http.get<Operater[]>(this.adresa + "operater");
  }

  dobaviPakete():Observable<Paket[]>{
    return this.http.get<Paket[]>(this.adresa + "paket");
  }

  dobaviKorisnike():Observable<Korisnik[]>{
    return this.http.get<Korisnik[]>(this.adresa + "korisnik");
  }


  obrisiOperatera(id):Observable<Operater>{
    return this.http.delete<Operater>(this.adresa + "operater/" + id);
  }
  obrisiPaket(id):Observable<Paket>{
    return this.http.delete<Paket>(this.adresa + "paket/" + id);
  }
  obrisiKorisnika(id):Observable<Korisnik>{
    return this.http.delete<Korisnik>(this.adresa + "korisnik/" + id);
  }


  dodajOperatera(item):Observable<Operater>{
    return this.http.post<Operater>(this.adresa + "operater", item);
  }
  dodajPaket(item):Observable<Paket>{
    return this.http.post<Paket>(this.adresa + "paket", item);
  }
  dodajKorisnika(item):Observable<Korisnik>{
    return this.http.post<Korisnik>(this.adresa + "korisnik", item);
  }
  

  detaljiOperater(id):Observable<Operater>{
    return this.http.get<Operater>(this.adresa + "operater/" + id);
  }
  detaljiPaket(id):Observable<Paket>{
    return this.http.get<Paket>(this.adresa + "paket/" + id);
  }
  detaljiKorisnik(id):Observable<Korisnik>{
    return this.http.get<Korisnik>(this.adresa + "korisnik/" + id);
  }


  izmenaOperater(item):Observable<Operater>{
    return this.http.put<Operater>(this.adresa + "operater/" + item.id, item);
  }
  izmenaPaket(item):Observable<Paket>{
    return this.http.put<Paket>(this.adresa + "paket/" + item.id, item);
  }
  izmenaKorisnik(item):Observable<Korisnik>{
    return this.http.put<Korisnik>(this.adresa + "korisnik/" + item.id, item);
  }







  //4. zadatak
  dobaviSveKorisnikeZaIdPaketa(id):Observable<Korisnik[]>{
    return this.http.get<Korisnik[]>(this.adresa + "korisnik?paketId=" + id);
  }

  dobaviSveIsplateZaId(id):Observable<Korisnik[]>{
    return this.http.get<Korisnik[]>(this.adresa + "Korisnik?uplatilac=" + id);
  }

  dobaviPaketPoBrojuPaketa(brojPaketa):Observable<Paket[]>{
    return this.http.get<Paket[]>(this.adresa + "Paket?brojPaketa=" + brojPaketa);
  }
}
