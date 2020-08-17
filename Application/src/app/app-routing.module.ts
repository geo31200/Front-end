import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './home/film/Film.component';
import { SerieComponent } from './home/serie/serie.component';
import { LivreComponent } from './home/livre/Livre.component';
import { FilmDetailComponent } from './home/film/film-detail/film-detail.component';
import { LivreDetailComponent } from './home/livre/livre-detail/livre-detail.component';
import { SerieDetailComponent } from './home/serie/serie-detail/serie-detail.component';
import { ContactComponent } from './home/contact/Contact.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddFilmComponent } from './home/film/add-film/add-film.component';
import { UpgrateFilmComponent } from './home/film/upgrate-film/upgrate-film.component';


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

  { path: 'contact', component: ContactComponent },

  { path: 'connexion', component: ConnexionComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =
  [FilmComponent,
    FilmDetailComponent,
    AddFilmComponent,
    UpgrateFilmComponent,
    SerieComponent,
    SerieDetailComponent,
    LivreComponent,
    LivreDetailComponent,
    ContactComponent,
    ConnexionComponent
  ]
