import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './home/film/Film.component';
import { SerieComponent } from './home/serie/serie.component';
import { LivreComponent } from './home/livre/Livre.component';
import { FilmDetailComponent } from './home/film/film-detail/film-detail.component';
import { LivreDetailComponent } from './home/livre/livre-detail/livre-detail.component';
import { SerieDetailComponent } from './home/serie/serie-detail/serie-detail.component';
import { ContactComponent } from './home/contact/Contact.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddFilmComponent } from './home/film/add-film/add-film.component';
import { UpgrateFilmComponent } from './home/film/upgrate-film/upgrate-film.component';
import { AddDirectorComponent } from './home/person/director/add-director/add-director.component';
import { UpgrateDirectorComponent } from './home/person/director/upgrate-director/upgrate-director.component';
import { AddActorComponent } from './home/person/actor/add-actor/add-actor.component';
import { UpgrateActorComponent } from './home/person/actor/upgrate-actor/upgrate-actor.component';
import { GenreComponent } from './home/other/genre/genre.component';
import { AddGenreComponent } from './home/other/genre/add-genre/add-genre.component';
import { DetailGenreComponent } from './home/other/genre/detail-genre/detail-genre.component';
import { ModifyGenreComponent } from './home/other/genre/modify-genre/modify-genre.component';
import { DirectorDetailComponent } from './home/person/director/director-detail/director-detail.component';
import { ActorDetailComponent } from './home/person/actor/actor-detail/actor-detail.component';
import { PersonComponent } from './home/person/person.component';
import { LoginComponent } from './user/login/login.component';
import { AdminComponent } from './user/admin/admin.component';
import { SimpleUserComponent } from './user/simple-user/simple-user.component';
import { UserComponent } from './user/user.component';

import { NationalityComponent } from './home/other/nationality/nationality.component';
import { AddNationalityComponent } from './home/other/nationality/add-nationality/add-nationality.component';
import { DetailNationalityComponent } from './home/other/nationality/detail-nationality/detail-nationality.component';
import { ModifyNationalityComponent } from './home/other/nationality/modify-nationality/modify-nationality.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'film', component: FilmComponent },
  { path: 'film-detail/:idFilm', component: FilmDetailComponent },
  { path: 'add-film', component: AddFilmComponent },
  { path: 'upgrate-film/:idFilm', component: UpgrateFilmComponent },

  { path: 'serie', component: SerieComponent },
  { path: 'serie-detail', component: SerieDetailComponent },

  { path: 'livre', component: LivreComponent },
  { path: 'livre-detail', component: LivreDetailComponent },

  { path: 'person', component: PersonComponent },

  { path: 'add-director', component: AddDirectorComponent },
  { path: 'director-detail/:idPerson', component: DirectorDetailComponent },
  { path: 'upgrate-director/:idPerson', component: UpgrateDirectorComponent },

  { path: 'add-actor', component: AddActorComponent },
  { path: 'detail-actor/:idPerson', component: ActorDetailComponent },
  { path: 'upgrate-actor/:idPerson', component: UpgrateActorComponent },

  { path: 'genre', component: GenreComponent },
  { path: 'add-genre', component: AddGenreComponent },
  { path: 'detail-genre/:idGenre', component: DetailGenreComponent },
  { path: 'modify-genre/:idGenre', component: ModifyGenreComponent },

  { path: 'nationality', component: NationalityComponent },
  { path: 'add-nationality', component: AddNationalityComponent },
  {
    path: 'detail-nationality/:idNationality',
    component: DetailNationalityComponent,
  },
  {
    path: 'modify-nationality/:idNationality',
    component: ModifyNationalityComponent,
  },

  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'simpleUser', component: SimpleUserComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  FilmComponent,
  FilmDetailComponent,
  AddFilmComponent,
  UpgrateFilmComponent,
  SerieComponent,
  SerieDetailComponent,
  LivreComponent,
  LivreDetailComponent,
  GenreComponent,
  AddGenreComponent,
  PersonComponent,
  UpgrateActorComponent,
  ActorDetailComponent,
  AddActorComponent,
  UpgrateDirectorComponent,
  DirectorDetailComponent,
  AddDirectorComponent,
  ContactComponent,
  NationalityComponent,
  AddNationalityComponent,
  DetailGenreComponent,
  ModifyGenreComponent,

  UserComponent,
  AdminComponent,
  SimpleUserComponent,
  LoginComponent,
];
