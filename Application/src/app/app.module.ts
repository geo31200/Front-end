import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { GenreComponent } from './home/other/genre/genre.component';
import { AddGenreComponent } from './home/other/genre/add-genre/add-genre.component';
import { NationalityComponent } from './home/other/nationality/nationality.component';
import { AddNationalityComponent } from './home/other/nationality/add-nationality/add-nationality.component';
import { ActorDetailComponent } from './home/person/actor/actor-detail/actor-detail.component';
import { DirectorDetailComponent } from './home/person/director/director-detail/director-detail.component';
import { PersonComponent } from './home/person/person.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './material-module/material-module';

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

    PersonComponent,

    AddDirectorComponent,
    UpgrateDirectorComponent,
    DirectorDetailComponent,

    ActorDetailComponent,
    AddActorComponent,
    UpgrateActorComponent,

    GenreComponent,
    AddGenreComponent,

    NationalityComponent,
    AddNationalityComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OrderModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
