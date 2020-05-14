import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PrikazSvihOperateraComponent } from './prikaz-svih-operatera/prikaz-svih-operatera.component';
import { PrikazSvihPaketaComponent } from './prikaz-svih-paketa/prikaz-svih-paketa.component';
import { PrikazSvihKorisnikaComponent } from './prikaz-svih-korisnika/prikaz-svih-korisnika.component';
import { DetaljiOperaterComponent } from './detalji-operater/detalji-operater.component';
import { DetaljiPaketComponent } from './detalji-paket/detalji-paket.component';
import { DetaljiKorisnikComponent } from './detalji-korisnik/detalji-korisnik.component';
import { SablonZaBrojComponent } from './sablon-za-broj/sablon-za-broj.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PrikazSvihOperateraComponent,
    PrikazSvihPaketaComponent,
    PrikazSvihKorisnikaComponent,
    DetaljiOperaterComponent,
    DetaljiPaketComponent,
    DetaljiKorisnikComponent,
    SablonZaBrojComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
