import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Person } from 'src/app/model/person';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { Nationality } from 'src/app/model/nationality';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css'],
})
export class DirectorDetailComponent implements OnInit {
  public idPerson: string;
  public person: Person;
  public filmsDirected: Film[];
  public nationalities: Nationality[];

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) {
    this.person = new Person();
  }

  ngOnInit(): void {
    this.idPerson = this.activatedRoute.snapshot.params['idPerson'];

    this.personService.getDirectorById(this.idPerson).subscribe((director) => {
      console.log('le director est ', director);
      this.person = director;
    });

    this.filmService.getFilmByDirector(this.idPerson).subscribe((film) => {
      this.filmsDirected = film;
      console.log(this.filmsDirected);
    });
  }

  // delete director
  public deleteDirector(person: Person) {
    this.personService.deleteDirector(person).subscribe((data) => {
      console.log(
        'The director',
        person.firstName,
        person.lastName,
        ' has been deleted'
      );
    });

    this.router.navigate(['/person']);
  }

  // go to upgrate director
  public goToUpgrateDirector(person: Person) {
    console.log('go to modify the director :', person);
    this.router.navigate(['/upgrate-director', person.idPerson]);
  }

  // detail film
  public detailFilm(film: Film) {
    console.log(film.idFilm, film.title);
    this.router.navigate(['/film-detail', film.idFilm]);
  }
  //detail nationality
  public detailNationality(nationality: Nationality) {
    console.log(
      'le pays est : ',
      nationality.idNationality,
      nationality.country
    );
    this.router.navigate(['/detail-nationality', nationality.idNationality]);
  }
}
