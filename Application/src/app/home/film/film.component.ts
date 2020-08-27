import { Component, OnInit } from '@angular/core';

import { FilmService } from 'src/app/service/film.service';
import { Observable } from 'rxjs';
import { Film } from 'src/app/model/film';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  public films: Observable<Film[]>;
  public film: Film;
  public title: string;
  public idFilm: string;

  constructor(private FilmService: FilmService, private router: Router) {}

  ngOnInit() {
    this.allFilm();
  }

  public allFilm() {
    this.films = this.FilmService.getAllFilm();
  }

  public detailFilm(film: Film) {
    console.log(film.idFilm, film.title);
    this.router.navigate(['/film-detail', film.idFilm]);
  }

  public deleteFilm(film: Film) {
    this.FilmService.deleteFilm(film).subscribe((data) => {
      console.log('le film', film, ' a été supprimé');
    });

    this.ngOnInit();
  }

  public goToAddFilm() {
    this.router.navigate(['/add-film']);
  }
}
