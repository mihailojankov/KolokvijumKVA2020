import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { KorisniciComponent } from './Components/korisnici/korisnici.component';
import { PravaPristupaComponent } from './Components/prava-pristupa/prava-pristupa.component';
import { DodeljenaPravaComponent } from './Components/dodeljena-prava/dodeljena-prava.component';
import { KorisnikComponent } from './Components/korisnik/korisnik.component';
import { PravoPristupaService } from './Services/pravo-pristupa.service';
import { PravoPristupaComponent } from './Components/pravo-pristupa/pravo-pristupa.component';
import { DodeljenoPravoComponent } from './Components/dodeljeno-pravo/dodeljeno-pravo.component';
import { IzmenaKorisnikaComponent } from './Components/izmena-korisnika/izmena-korisnika.component';
import { IzmenaPravaPristupaComponent } from './Components/izmena-prava-pristupa/izmena-prava-pristupa.component';


const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"korisnici", component:KorisniciComponent},
  {path:"pravaPristupa", component:PravaPristupaComponent},
  {path:"dodeljenaPrava", component:DodeljenaPravaComponent},
  {path:"korisnici/:id", component:KorisnikComponent},
  {path:"pravaPristupa/:id", component:PravoPristupaComponent},
  {path:"dodeljenaPrava/:id", component:DodeljenoPravoComponent},
  {path:"izmeniKorisnika/:id", component:IzmenaKorisnikaComponent},
  {path:"izmeniPravoPristupa/:id", component:IzmenaPravaPristupaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
