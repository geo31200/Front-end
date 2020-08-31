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
  public actors: Person[];
  public actor: Person;
  public show: boolean = false;

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
    this.actors = [];
  }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      duration: ['', Validators.required],
      nameGenres: ['', Validators.required],
      director: ['', Validators.required],
    });

    this.allDirector();
    this.allGenre();
    this.allActor();
  }

  //add film
  public addFilm() {
    this.film.title = this.movieForm.value.title;
    this.film.year = this.movieForm.value.year;
    this.film.duration = this.movieForm.value.duration;

    this.genre = this.movieForm.value.nameGenres;
    console.log('le genre est', this.genre);
    this.film.genres.push(this.genre);

    this.film.director = this.movieForm.value.director;
    console.log('le director est', this.film.director);

    // this.actors = this.movieForm.value.actor;
    // console.log('les acteurs choisi sont : ', this.actors);
    this.film.actors.push(...this.actors);

    this.filmService.postFilm(this.film).subscribe((data) => {
      console.log('le film est ', data);
    });

    this.router.navigate(['/film']);
  }

  // get genres
  public allGenre() {
    this.genreService.getAllGenre().subscribe((genre) => {
      this.allgenre = genre;
      console.log('genre', genre);
    });
  }

  //get director
  public allDirector() {
    this.personService.getAllDirector().subscribe((director) => {
      this.alldirector = director;
      console.log('director', director);
    });
  }

  // get actor
  public allActor() {
    this.personService.getAllActor().subscribe((actor) => {
      this.allactor = actor;
      console.log('Actors : ', actor);
    });
  }

  //go To Add Director

  public goToAddDirector() {
    this.router.navigate(['add-director']);
  }

  //go To Add addActor

  public goToAddActor() {
    this.router.navigate(['add-actor']);
  }

  //go To Add Genre

  public goToAddGenre() {
    this.router.navigate(['add-genre']);
  }

  // addActorsOnList

  public addActorOnList(person: Person) {
    const index = this.actors.indexOf(person);
    if (index < 0) {
      this.actors.push(person);
      this.show = true;
      console.log(person);
    } else {
      alert(
        ` The actor, ${person.lastName}, ${person.firstName} has been already added`
      );
    }
  }

  //deleteActorOnList

  public deleteActorOnList(person: Person) {
    const index = this.actors.indexOf(person);
    if (index >= 0) {
      this.actors.splice(index, 1);
      console.log(
        `The actor, ${person.lastName}, ${person.firstName} has been deleted on the list of actors`
      );
    }
  }
}
