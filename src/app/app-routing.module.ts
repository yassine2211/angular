import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { VolsComponent } from './components/vols/vols.component';
import { OffresComponent } from './components/offres/offres.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { AddDestinationComponent } from './components/add-destination/add-destination.component';
import { AddVolComponent } from './components/add-vol/add-vol.component';
import { ReserverOffreComponent } from './components/reserver-offre/reserver-offre.component';
import { ReserverVolComponent } from './components/reserver-vol/reserver-vol.component';
import { ListDestinationComponent } from './components/list-destination/list-destination.component';
import { ListVolsComponent } from './components/list-vols/list-vols.component';
import { ListOffresComponent } from './components/list-offres/list-offres.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"destinations", component:DestinationsComponent},
  {path:"vols", component:VolsComponent},
  {path:"offres", component:OffresComponent},
  {path:"login", component:LoginComponent},
  {path:"add-offre", component:AddOffreComponent},
  {path:"add-destination", component:AddDestinationComponent},
  {path:"add-vol", component:AddVolComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"reserver-offre", component:ReserverOffreComponent},
  {path:"reserver-vol", component:ReserverVolComponent},
  {path:"add-vol/:id",component:AddVolComponent},
  {path:"list-destination",component:ListDestinationComponent},
  {path:"list-vols",component:ListVolsComponent},
  {path:"list-offres",component:ListOffresComponent},
  {path:"add-destination/:id",component:AddDestinationComponent},
  {path:"add-offre/:id",component:AddOffreComponent},
  {path:"reserver-offre/:id",component:ReserverOffreComponent},
  {path:"reserver-vol/:id",component:ReserverVolComponent},
  {path:"offres/:name", component:OffresComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
