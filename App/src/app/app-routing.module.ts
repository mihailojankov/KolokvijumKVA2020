import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PrikazSvihOperateraComponent } from './prikaz-svih-operatera/prikaz-svih-operatera.component';
import { PrikazSvihPaketaComponent } from './prikaz-svih-paketa/prikaz-svih-paketa.component';
import { PrikazSvihKorisnikaComponent } from './prikaz-svih-korisnika/prikaz-svih-korisnika.component';
import { DetaljiOperaterComponent } from './detalji-operater/detalji-operater.component';
import { DetaljiPaketComponent } from './detalji-paket/detalji-paket.component';
import { DetaljiKorisnikComponent } from './detalji-korisnik/detalji-korisnik.component';


const routes: Routes = [
{path:"",component:MainPageComponent},
{path:"prikazOperatera",component:PrikazSvihOperateraComponent},
{path:"prikazPaketa",component:PrikazSvihPaketaComponent},
{path:"prikazKorisnika",component:PrikazSvihKorisnikaComponent},
{path:"prikazOperatera/prikazDetalja", component:DetaljiOperaterComponent},
{path:"prikazPaketa/prikazDetalja", component:DetaljiPaketComponent},
{path:"prikazKorisnika/prikazDetalja", component:DetaljiKorisnikComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
