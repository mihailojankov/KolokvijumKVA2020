import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { KorisnikComponent } from './Components/korisnik/korisnik.component';
import { KorisniciComponent } from './Components/korisnici/korisnici.component';
import { PravoPristupaComponent } from './Components/pravo-pristupa/pravo-pristupa.component';
import { PravaPristupaComponent } from './Components/prava-pristupa/prava-pristupa.component';
import { DodeljenoPravoComponent } from './Components/dodeljeno-pravo/dodeljeno-pravo.component';
import { DodeljenaPravaComponent } from './Components/dodeljena-prava/dodeljena-prava.component';
import { KorisnikSablonComponent } from './Components/korisnik-sablon/korisnik-sablon.component';
import { PravoPristupaSablonComponent } from './Components/pravo-pristupa-sablon/pravo-pristupa-sablon.component';
import { IzmenaKorisnikaComponent } from './Components/izmena-korisnika/izmena-korisnika.component';
import { IzmenaPravaPristupaComponent } from './Components/izmena-prava-pristupa/izmena-prava-pristupa.component';
import { IzmenaDodeljenogPravaComponent } from './Components/izmena-dodeljenog-prava/izmena-dodeljenog-prava.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    KorisnikComponent,
    KorisniciComponent,
    PravoPristupaComponent,
    PravaPristupaComponent,
    DodeljenoPravoComponent,
    DodeljenaPravaComponent,
    KorisnikSablonComponent,
    PravoPristupaSablonComponent,
    IzmenaKorisnikaComponent,
    IzmenaPravaPristupaComponent,
    IzmenaDodeljenogPravaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
