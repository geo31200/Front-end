import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Film } from '../../model/film';
import { Person } from '../../model/person';
import { Genre } from '../../model/genre';
import { PersonService } from '../../service/person.service';
import { FilmService } from '../../service/film.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;

  public allfilm: Film[];
  public titleFilm: string;
  public filmFiltered: Film[];

  public lastNameActors: string;
  public allactor: Person[];
  public actorFiltered: Person[];

  public lastNameDirector: string;
  public alldirector: Person[];
  public directorFiltered: Person[];

  public show: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private filmService: FilmService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      allItems: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
    });
    this.allActor(), this.allFilm(), this.allDirector();
  }

  // get all films
  public allFilm() {
    this.filmService.getAllFilm().subscribe((film) => {
      this.allfilm = film;
      this.filmFiltered = film;
    });
  }

  //get all actors
  public allActor() {
    this.personService.getAllActor().subscribe((actor) => {
      this.actorFiltered = actor;
      this.allactor = actor;
    });
  }
  // get all directors
  public allDirector() {
    this.personService.getAllDirector().subscribe((director) => {
      this.directorFiltered = director;
      this.alldirector = director;
    });
  }

  //search actor
  public searchActor(): void {
    if (this.lastNameActors) {
      this.actorFiltered = this.allactor.filter((a) =>
        a.lastName
          .toLocaleLowerCase()
          .match(this.lastNameActors.toLocaleLowerCase())
      );
      this.show = true;
    } else {
      this.actorFiltered = this.allactor;
      this.show = false;
    }
  }
  //search director
  public searchDirector(): void {
    if (this.lastNameDirector) {
      this.directorFiltered = this.alldirector.filter((a) =>
        a.lastName
          .toLocaleLowerCase()
          .match(this.lastNameDirector.toLocaleLowerCase())
      );
      this.show = true;
    } else {
      this.directorFiltered = this.alldirector;
      this.show = false;
    }
  }

  //search film
  public searchFilm(): void {
    if (this.titleFilm) {
      this.filmFiltered = this.allfilm.filter((f) =>
        f.title.toLocaleLowerCase().match(this.titleFilm.toLocaleLowerCase())
      );
      this.show = true;
    } else {
      this.filmFiltered = this.allfilm;
      this.show = false;
    }
  }

  // go to detail actor
  public detailActor(person: Person) {
    console.log(person.idPerson, person.firstName, person.lastName);
    this.snackbar
      .open(
        'You will be directed to this actor : ',
        `${person.lastName}, ${person.firstName}`,
        {
          duration: 3000,
          verticalPosition: 'top',
        }
      )
      .afterDismissed()
      .subscribe((a) => {
        this.router.navigate(['/detail-actor', person.idPerson]);
      });
  }

  // go to detail director
  public detailDirector(person: Person) {
    console.log(person.idPerson, person.firstName, person.lastName);
    this.snackbar
      .open(
        'You will be directed to this director : ',
        `${person.lastName},${person.firstName}`,
        {
          duration: 3000,
          verticalPosition: 'top',
        }
      )
      .afterDismissed()
      .subscribe((a) => {
        this.router.navigate(['/director-detail', person.idPerson]);
      });
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
}
