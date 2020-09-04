import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Film } from '../model/film';
import { Person } from '../model/person';
import { Genre } from '../model/genre';
import { PersonService } from '../service/person.service';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public films: Observable<Film[]>;
  public searchForm: FormGroup;
  public actors: Observable<Person[]>;
  public directors: Observable<Person[]>;
  public genres: Observable<Genre>;

  public lastNameActors: string;
  public allactor: Person[];
  public actorFiltered: Person[];

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      actors: [''],
    });
    this.allActor(), this.allFilm(), this.allDirector();
  }

  // get all films
  public allFilm() {
    this.films = this.filmService.getAllFilm();
  }

  //get all actors
  public allActor() {
    this.personService.getAllActor().subscribe((actor) => {
      this.actorFiltered = actor;
      this.allactor = actor;
    });
    this.actors = this.personService.getAllActor();
  }
  // get all directors
  public allDirector() {
    this.directors = this.personService.getAllDirector();
  }

  //search actor
  public searchActor(): void {
    if (this.lastNameActors) {
      this.actorFiltered = this.allactor.filter((a) =>
        a.lastName
          .toLocaleLowerCase()
          .match(this.lastNameActors.toLocaleLowerCase())
      );
    } else {
      this.actorFiltered = this.allactor;
    }
  }
}
