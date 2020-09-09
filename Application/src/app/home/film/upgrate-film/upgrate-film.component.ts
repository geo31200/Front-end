import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Person } from 'src/app/model/person';
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/service/person.service';

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
  public alldirector: Person[];

  public allactor: Person[];
  public actors: Person[];
  public actor: Person;

  public genre: Genre;
  public genres: Genre[];
  public allgenre: Genre[];

  public movieForm: FormGroup;

  public show: boolean = false;

  constructor(
    private personService: PersonService,
    private genreService: GenreService,
    private filmservice: FilmService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.director = new Person();
    this.genre = new Genre();
    this.actors = [];
    this.genres = [];
  }

  ngOnInit(): void {
    this.idFilm = this.route.snapshot.params['idFilm'];
    // this.film = new Film();
    // console.log(this.film);
    // this.filmservice.getFilmById(this.idFilm).subscribe((data) => {
    //   console.log('le film est ', data);
    //   this.film = data;
    // });
    // console.log("l'id du film est", this.idFilm);

    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      duration: ['', Validators.required],
    });

    this.allGenre();
    this.allActor();
  }

  public upgrateFilm() {
    this.film.idFilm = this.idFilm;
    this.film.title = this.movieForm.value.title;
    this.film.year = this.movieForm.value.year;
    this.film.duration = this.movieForm.value.duration;
    this.film.genres.push(...this.genres);
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
  // get actor
  public allActor() {
    this.personService.getAllActor().subscribe((actor) => {
      this.allactor = actor;
      console.log('Actors : ', actor);
    });
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

  // addGenresOnList

  public addGenreOnList(genre: Genre) {
    const index = this.genres.indexOf(genre);
    if (index < 0) {
      this.genres.push(genre);
      this.show = true;
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
      console.log(
        `The actor, ${genre.nameGenres}, has been deleted on the list of genres`
      );
    }
  }
}
