import { Component, OnInit } from '@angular/core';

import { FilmService } from 'src/app/service/film.service';
import { Observable } from 'rxjs';
import { Film } from 'src/app/model/film';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  public titleFilm: string;
  public filmFiltered: Film[];
  public allFilms: Film[];
  public searchForm: FormGroup;
  public show: boolean = false;

  constructor(
    private FilmService: FilmService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      film: ['', Validators.compose([Validators.required])],
    });
    this.allFilm();
  }

  public allFilm() {
    this.FilmService.getAllFilm().subscribe((film) => {
      this.allFilms = film;
      this.filmFiltered = film;
    });
  }

  //search film
  public searchFilm(): void {
    if (this.titleFilm) {
      this.filmFiltered = this.allFilms.filter((f) =>
        f.title.toLocaleLowerCase().match(this.titleFilm.toLocaleLowerCase())
      );
    } else {
      this.filmFiltered = this.allFilms;
    }
  }

  // go to detail film
  public detailFilm(film: Film) {
    console.log(film.idFilm, film.title);
    this.snackbar
      .open('You will be directed to this film', `${film.title}`, {
        duration: 3000,
        verticalPosition: 'top',
      })
      .afterDismissed()
      .subscribe((a) => {
        this.router.navigate(['/film-detail', film.idFilm]);
      });
  }

  public goToAddFilm() {
    this.router.navigate(['/add-film']);
  }
}
