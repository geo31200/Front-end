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
  public alldirector: Person[];

  public namegenres: string;
  public genre: Genre;
  public genres: Genre[];
  public allgenre: Genre[];
  public genreFiltered: Genre[];

  public firstNameActors: string;
  public lastNameActors: string;
  public allactor: Person[];
  public actors: Person[];
  public actor: Person;
  public actorFiltered: Person[];

  public movieForm: FormGroup;
  public showGenre: boolean = false;
  public showActor: boolean = false;

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
    this.genres = [];
  }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      duration: ['', Validators.required],
      director: ['', Validators.required],
      genre: ['', Validators.minLength(2)],
      actor: [''],
    });

    this.allDirector();
    this.allGenre();
    this.allActor();
  }

  //search genre
  public searchGenre(): void {
    if (this.namegenres) {
      this.genreFiltered = this.allgenre.filter((g) =>
        g.nameGenres

          .toLocaleLowerCase()
          .match(this.namegenres.toLocaleLowerCase())
      );
    } else {
      this.genreFiltered = this.allgenre;
    }
  }

  //search actor
  public searchActor(): void {
    if (this.lastNameActors || this.firstNameActors) {
      this.actorFiltered = this.allactor.filter(
        (a) => {
          a.lastName
            .toLocaleLowerCase()
            .match(this.lastNameActors.toLocaleLowerCase());
        },
        (a) => {
          a.firstName
            .toLocaleLowerCase()
            .match(this.firstNameActors.toLocaleLowerCase());
        }
      );
    } else {
      this.actorFiltered = this.allactor;
    }
  }

  //add film
  public addFilm() {
    this.film.title = this.movieForm.value.title;
    this.film.year = this.movieForm.value.year;
    this.film.duration = this.movieForm.value.duration;

    this.film.genres.push(...this.genres);

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
      this.genreFiltered = genre;
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
      this.actorFiltered = actor;
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
      this.showActor = true;
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
      this.showActor = false;
      console.log(
        `The actor, ${person.lastName}, ${person.firstName} has been deleted on the list of actors`
      );
    }
  }

  // addGenresOnList

  public addGenreOnList(genre: Genre) {
    const index = this.genres.indexOf(genre);
    if (index < 0) {
      this.genres.push(genre);
      this.showGenre = true;
      console.log(genre);
    } else {
      alert(` The genre, ${genre.nameGenres}, has been already added`);
    }
  }

  //deleteActorOnList

  public deleteGenreOnList(genre: Genre) {
    const index = this.genres.indexOf(genre);
    if (index >= 0) {
      this.genres.splice(index, 1);
      this.showGenre = false;
      console.log(
        `The actor, ${genre.nameGenres}, has been deleted on the list of genres`
      );
    }
  }
}
