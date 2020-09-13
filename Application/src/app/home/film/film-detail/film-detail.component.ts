import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../service/film.service';

import { Film } from 'src/app/model/film';
import { Person } from 'src/app/model/person';

import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/model/genre';
import { Nationality } from 'src/app/model/nationality';
import { MatDialog } from '@angular/material/dialog';
import { DeleteFilmComponent } from '../delete-film/delete-film.component';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  public film: Film;
  public idFilm: string;

  public nationality: Nationality;
  public genre: Genre;
  public genres: Genre[];
  public actors: Person[];
  public nationalities: Nationality[];

  constructor(
    private filmservice: FilmService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // get id film from route
    this.idFilm = this.route.snapshot.params['idFilm'];
    this.film = new Film();
    this.filmservice.getFilmById(this.idFilm).subscribe(
      (data) => {
        console.log(data);
        this.film = data;
      },
      (error) => console.log(error)
    );
  }

  // delete film
  public deleteFilm(film: Film) {
    this.filmservice.deleteFilm(film).subscribe((data) => {
      console.log('le film', film, ' a été supprimé');
    });

    this.router.navigate(['/film']);
  }

  //detail genre
  public detailGenre(genre: Genre) {
    console.log('le genre est : ', genre.idGenre, genre.nameGenres);
    this.router.navigate(['/detail-genre', genre.idGenre]);
  }

  //detail nationality
  public detailNationality(nationality: Nationality) {
    console.log(
      'le pays est : ',
      nationality.idNationality,
      nationality.country
    );
    this.router.navigate(['/detail-nationality', nationality.idNationality]);
  }

  //detail Actor
  public detailActor(person: Person) {
    console.log(
      "l'actor est : ",
      person.idPerson,
      person.firstName,
      person.lastName
    );
    this.router.navigate(['/detail-actor', person.idPerson]);
  }
  //detail director
  public detailDirector(film: Film) {
    console.log(
      'le director est : ',
      film.director.firstName,
      film.director.lastName
    );
    this.router.navigate(['/director-detail', film.director.idPerson]);
  }

  // got to upgrate film
  public goToUpgrateFilm(film: Film) {
    console.log('En route pour modifier le film', film);
    this.router.navigate(['/upgrate-film', film.idFilm]);
  }

  // dialog
  public openDialog() {
    let dialogRef = this.dialog.open(DeleteFilmComponent, {
      data: { title: this.film.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`delete this ${result} `);
    });
  }
}
