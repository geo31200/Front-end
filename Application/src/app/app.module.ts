import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './home/film/Film.component';
import { FilmDetailComponent } from './home/film/film-detail/film-detail.component';
import { LivreComponent } from './home/livre/Livre.component';
import { LivreDetailComponent } from './home/livre/livre-detail/livre-detail.component';
import { SerieComponent } from './home/serie/serie.component';
import { SerieDetailComponent } from './home/serie/serie-detail/serie-detail.component';
import { AddFilmComponent } from './home/film/add-film/add-film.component';
import { UpgrateFilmComponent } from './home/film/upgrate-film/upgrate-film.component';
import { AddDirectorComponent } from './home/person/director/add-director/add-director.component';
import { UpgrateDirectorComponent } from './home/person/director/upgrate-director/upgrate-director.component';
import { AddActorComponent } from './home/person/actor/add-actor/add-actor.component';
import { UpgrateActorComponent } from './home/person/actor/upgrate-actor/upgrate-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    PageNotFoundComponent,

    FilmComponent,
    FilmDetailComponent,
    AddFilmComponent,
    UpgrateFilmComponent,

    LivreComponent,
    LivreDetailComponent,

    SerieComponent,
    SerieDetailComponent,

    AddDirectorComponent,
    UpgrateDirectorComponent,

    AddActorComponent,
    UpgrateActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
