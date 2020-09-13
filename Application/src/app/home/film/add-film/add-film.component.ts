import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from 'src/app/model/genre';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';
import { GenreService } from 'src/app/service/genre.service';
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nationality } from 'src/app/model/nationality';
import { NationalityService } from 'src/app/service/nationality.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent implements OnInit {
  public date: string;

  public film: Film;

  public director: Person;
  public alldirector: Person[];

  public namegenres: string;
  public genre: Genre;
  public genres: Genre[];
  public allgenre: Genre[];
  public genreFiltered: Genre[];

  public country: string;
  public nationality: Nationality;
  public nationalities: Nationality[];
  public allnationality: Nationality[];
  public nationalityFiltered: Nationality[];

  public firstNameActors: string;
  public lastNameActors: string;
  public allactor: Person[];
  public actors: Person[];
  public actorFiltered: Person[];

  public movieForm: FormGroup;

  public titleFormGroup: FormGroup;
  public yearFormGroup: FormGroup;
  public durationFormGroup: FormGroup;
  public directorFormGroup: FormGroup;
  public genreFormGroup: FormGroup;
  public nationalityFormGroup: FormGroup;
  public actorFormGroup: FormGroup;

  public showGenre: boolean = false;
  public showActor: boolean = false;
  public showNationality: boolean = false;

  constructor(
    private nationalityService: NationalityService,
    private genreService: GenreService,
    private personService: PersonService,
    private filmService: FilmService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) {
    this.film = new Film();
    this.director = new Person();
    this.genre = new Genre();
    this.actors = [];
    this.genres = [];
    this.nationalities = [];
  }

  ngOnInit(): void {
    // date : today
    this.date = new Date().toISOString();
    // form required
    this.titleFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
    });
    this.yearFormGroup = this.formBuilder.group({
      year: ['', Validators.required],
    });
    this.durationFormGroup = this.formBuilder.group({
      duration: ['', Validators.required],
    });
    this.directorFormGroup = this.formBuilder.group({
      director: ['', Validators.required],
    });
    this.genreFormGroup = this.formBuilder.group({
      genre: [''],
    });
    this.nationalityFormGroup = this.formBuilder.group({
      nationality: [''],
    });
    this.actorFormGroup = this.formBuilder.group({
      actor: [''],
    });

    // get all director, genre, actor and nationalty
    this.allDirector();
    this.allGenre();
    this.allActor();
    this.allNationality();
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
  //search nationality
  public searchNationality(): void {
    if (this.country) {
      this.nationalityFiltered = this.allnationality.filter((n) =>
        n.country.toLocaleLowerCase().match(this.country.toLocaleLowerCase())
      );
    } else {
      this.nationalityFiltered = this.allnationality;
    }
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

  //add film
  public addFilm() {
    this.film.title = this.titleFormGroup.value.title;
    this.film.year = this.yearFormGroup.value.year;
    this.film.duration = this.durationFormGroup.value.duration;

    this.film.director = this.directorFormGroup.value.director;
    this.film.nationalities.push(...this.nationalities);
    this.film.genres.push(...this.genres);
    this.film.actors.push(...this.actors);

    this.filmService.postFilm(this.film).subscribe(
      (data) => {
        console.log('le film est ', data);
        this.snackbar
          .open('Your movie has been created', '', {
            duration: 2000,
            verticalPosition: 'top',
          })
          .afterDismissed()
          .subscribe((a) => {
            this.router.navigate(['/film']);
          });
      },
      (err) => {
        console.log(err);

        alert(
          'Tous les champs ne sont pas bien rempli ou le titre du film existe déjà '
        );
      }
    );
  }

  // get genres
  public allGenre() {
    this.genreService.getAllGenre().subscribe((genre) => {
      this.genreFiltered = genre;
      this.allgenre = genre;
      console.log('genre', genre);
    });
  }

  //get nationality
  public allNationality() {
    this.nationalityService.getAllNationality().subscribe((nationality) => {
      this.nationalityFiltered = nationality;
      this.allnationality = nationality;
      console.log('nationality', nationality);
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

  //go To Add nationality

  public goToAddNationality() {
    this.router.navigate(['add-nationality']);
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

  //deleteGenreOnList

  public deleteGenreOnList(genre: Genre) {
    let index = this.genres.indexOf(genre);
    if (index >= 0) {
      this.genres.splice(index, 1);

      console.log(
        `The genre, ${genre.nameGenres}, has been deleted on the list of genres`
      );
    }
  }

  // addNationalitiesOnList

  public addNationalityOnList(nationality: Nationality) {
    const index = this.nationalities.indexOf(nationality);
    if (index < 0) {
      this.nationalities.push(nationality);
      this.showNationality = true;
      console.log(nationality);
    } else {
      alert(` The nationality, ${nationality.country}, has been already added`);
    }
  }

  //deleteNationalityOnList

  public deleteNationalityOnList(nationality: Nationality) {
    const index = this.nationalities.indexOf(nationality);
    if (index >= 0) {
      this.nationalities.splice(index, 1);

      console.log(
        `The nationality, ${nationality.country}, has been deleted on the list of nationaties`
      );
    }
  }
}
