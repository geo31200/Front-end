import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-upgrate-film',
  templateUrl: './upgrate-film.component.html',
  styleUrls: ['./upgrate-film.component.css'],
})
export class UpgrateFilmComponent implements OnInit {
  public film: Film;
  public idFilm: string;
  public title: string;
  public director: Person;
  public genre: Genre;
  public alldirector: Person[];
  public movieForm: FormGroup;
  public allgenre: Genre[];
  public allactor: Person[];
  public actors: Person[];
  public actor: Person;
  public show: boolean = false;

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
    this.film = new Film();
    this.director = new Person();
    this.genre = new Genre();
    this.actors = [];
    this.allGenre();
  }

  public upgrateFilm() {
    this.film.title = this.movieForm.value.title;
    this.film.year = this.movieForm.value.year;
    this.film.duration = this.movieForm.value.duration;

    this.genre.nameGenres = this.movieForm.value.nameGenres;
    this.film.genres.push(this.genre);

    this.director = this.movieForm.value.director;
    console.log('le director est', this.director);

    this.actors = this.movieForm.value.actor;
    console.log('les acteurs choisi sont : ', this.actors);
    this.film.actors.push(...this.actors);

    this.filmservice.upgrateFilm(this.film).subscribe((data) => {
      console.log("c'est", data);
    });
    console.log('le film est devenu : ', this.film);
    this.router.navigate(['/film']);
  }

  public allGenre() {
    this.genreService.getAllGenre().subscribe((genre) => {
      this.allgenre = genre;
    });
  }
}
