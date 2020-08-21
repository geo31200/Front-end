import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from 'src/app/model/genre';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent implements OnInit {
  public film: Film;
  public director: Person;
  public genre: Genre;
  public alldirector: Person[];
  public movieForm: FormGroup;
  public allgenre: Genre[];
  public allactor: Person[];
  public actors: Person;

  constructor(
    private genreService: GenreService,
    private personService: PersonService,
    private filmService: FilmService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.film = new Film();
    this.director = new Person();
    this.genre = new Genre();
    this.actors = new Person();
  }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      duration: ['', Validators.required],
      nameGenres: ['', Validators.required],
      director: ['', Validators.required],
      actor: ['', Validators.required],
    });

    this.allDirector();
    this.allGenre();
    this.allActor();
  }

  public addFilm() {
    this.film.title = this.movieForm.value.title;
    this.film.year = this.movieForm.value.year;
    this.film.duration = this.movieForm.value.duration;

    this.genre = this.movieForm.value.nameGenres;
    console.log('le genre est', this.genre);
    this.film.genres.push(this.genre);

    this.film.director = this.movieForm.value.director;
    console.log('le director est', this.film.director);

    this.actors = this.movieForm.value.actor;
    console.log("l'acteur choisi est : ", this.actors);
    this.film.actors.push(this.actors);

    this.filmService.postFilm(this.film).subscribe((data) => {
      console.log('le film est ', data);
    });

    this.router.navigate(['/film']);
  }

  public allGenre() {
    this.genreService.getAllGenre().subscribe((genre) => {
      this.allgenre = genre;
      console.log('genre', genre);
    });
  }

  public allDirector() {
    this.personService.getAllDirecor().subscribe((director) => {
      this.alldirector = director;
      console.log('director', director);
    });
  }

  public allActor() {
    this.personService.getAllActor().subscribe((actor) => {
      this.allactor = actor;
      console.log('Actors : ', actor);
    });
  }

  // director.lastName = this.movieForm.value.director
  // director.firstName = this.movieForm.value.firstName
  // director.birthdate = this.movieForm.value.birthdate
  // this.personServive.postDirecor(director).subscribe(data =>
  //   {
  //   console.log("le director est ", data)
  // })
}
