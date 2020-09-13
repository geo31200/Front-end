import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';
import { Nationality } from 'src/app/model/nationality';
import { NationalityService } from 'src/app/service/nationality.service';

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

  public country: string;
  public nationality: Nationality;
  public nationalities: Nationality[];
  public allnationality: Nationality[];

  public genre: Genre;
  public genres: Genre[];
  public allgenre: Genre[];

  public movieForm: FormGroup;

  public showGenre: boolean = false;
  public showActor: boolean = false;
  public showNationality: boolean = false;

  constructor(
    private nationalityService: NationalityService,
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
    this.nationalities = [];
  }

  ngOnInit(): void {
    this.idFilm = this.route.snapshot.params['idFilm'];
    this.film = new Film();

    this.filmservice.getFilmById(this.idFilm).subscribe((data) => {
      console.log('le film est ', data);
      this.film = data;
    });
    console.log("l'id du film est", this.idFilm);

    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      duration: ['', Validators.required],
    });

    this.allGenre();
    this.allActor();
    this.allNationality();
  }

  public upgrateFilm() {
    this.film.idFilm = this.idFilm;
    this.film.title = this.movieForm.value.title;
    this.film.year = this.movieForm.value.year;
    this.film.duration = this.movieForm.value.duration;
    this.film.genres.push(...this.genres);
    this.film.actors.push(...this.actors);
    this.film.nationalities.push(...this.nationalities);

    this.filmservice.upgrateFilm(this.film).subscribe((data) => {
      console.log("c'est", data);
    });

    console.log('le film est devenu : ', this.film);

    this.router.navigate(['/film']);
  }

  // get actor
  public allActor() {
    this.personService.getAllActor().subscribe((actor) => {
      this.allactor = actor;
    });
  }

  // remove Genre
  public removeActor(person: Person) {
    const index = this.actors.indexOf(person);
    this.film.actors.splice(index, 1);
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

  //get all genre
  public allGenre() {
    this.genreService.getAllGenre().subscribe((genre) => {
      this.allgenre = genre;
    });
  }
  // remove Genre
  public removeGenre(genre: Genre) {
    const index = this.genres.indexOf(genre);
    this.film.genres.splice(index, 1);
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
      console.log(
        `The actor, ${genre.nameGenres}, has been deleted on the list of genres`
      );
    }
  }

  //get nationality
  public allNationality() {
    this.nationalityService.getAllNationality().subscribe((nationality) => {
      this.allnationality = nationality;
      console.log('nationality', nationality);
    });
  }

  // remove Nationality
  public removeNationality(nationality: Nationality) {
    const index = this.nationalities.indexOf(nationality);
    this.film.nationalities.splice(index, 1);
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
