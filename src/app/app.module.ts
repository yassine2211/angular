import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { OffresComponent } from './components/offres/offres.component';
import { BestOffresComponent } from './components/best-offres/best-offres.component';
import { BestDestinationsComponent } from './components/best-destinations/best-destinations.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HeroComponent } from './components/hero/hero.component';
import { VolsComponent } from './components/vols/vols.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddDestinationComponent } from './components/add-destination/add-destination.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { AddVolComponent } from './components/add-vol/add-vol.component';
import { ListOffresComponent } from './components/list-offres/list-offres.component';
import { ListDestinationComponent } from './components/list-destination/list-destination.component';
import { ListVolsComponent } from './components/list-vols/list-vols.component';
import { ReserverVolComponent } from './components/reserver-vol/reserver-vol.component';
import { ReserverOffreComponent } from './components/reserver-offre/reserver-offre.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ColorDirective } from './directives/color.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DestinationsComponent,
    OffresComponent,
    BestOffresComponent,
    BestDestinationsComponent,
    LoginComponent,
    SignUpComponent,
    HeroComponent,
    VolsComponent,
    HomeComponent,
    AddDestinationComponent,
    AddOffreComponent,
    AddVolComponent,
    ListOffresComponent,
    ListDestinationComponent,
    ListVolsComponent,
    ReserverVolComponent,
    ReserverOffreComponent,
    ColorDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
