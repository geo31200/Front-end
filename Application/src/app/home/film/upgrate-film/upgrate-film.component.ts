import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-upgrate-film',
  templateUrl: './upgrate-film.component.html',
  styleUrls: ['./upgrate-film.component.css'],
})
export class UpgrateFilmComponent implements OnInit {
  public film: Film;
  public idFilm: string;
  public title: string;
  public movieForm: FormGroup;
  public allgenre: Genre[];
  public genre: Genre;

  constructor(
    private genreService: GenreService,
    private filmservice: FilmService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.film = this.route.snapshot.params['idFilm'];

    console.log("l'id du film est", this.film);

    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      duration: ['', Validators.required],
      nameGenres: ['', Validators.required],
    });

    this.allGenre();
  }

  public upgrateFilm() {
    let genre = new Genre();
    let film = new Film();

    film.title = this.movieForm.value.title;
    film.year = this.movieForm.value.year;
    film.duration = this.movieForm.value.duration;

    genre.nameGenres = this.movieForm.value.nameGenres;
    this.film.genres.push(this.genre);

    this.filmservice.upgrateFilm(film).subscribe((data) => {
      console.log("c'est", data);
    });
    console.log('le film est devenu : ', film);
    this.router.navigate(['/film']);
  }

  public allGenre() {
    this.genreService.getAllGenre().subscribe((genre) => {
      this.allgenre = genre;
    });
  }
}