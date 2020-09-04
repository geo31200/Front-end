import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { Film } from 'src/app/model/film';
import { PersonService } from 'src/app/service/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
})
export class ActorDetailComponent implements OnInit {
  public idPerson: string;
  public filmsPlayed: Film[];
  public person: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.idPerson = this.route.snapshot.params['idPerson'];
    this.person = new Person();
    this.personService.getActorById(this.idPerson).subscribe((actor) => {
      console.log(actor);
      this.person = actor;
    });

    this.filmService.getFilmByActor(this.idPerson).subscribe((film) => {
      this.filmsPlayed = film;
      console.log(this.filmsPlayed);
    });
  }

  // delete actor
  public deleteActor(person: Person) {
    this.personService.deleteActor(person).subscribe((person) => {
      console.log('The actor', person, ' has been deleted');
    });

    this.ngOnInit();
  }

  // go to upgrate actor
  public goToUpgrateActor(person: Person) {
    console.log('go to modify the actor :', person);
    this.router.navigate(['/upgrate-actor', person.idPerson]);
  }
}
