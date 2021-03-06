import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { Film } from 'src/app/model/film';
import { PersonService } from 'src/app/service/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { Nationality } from 'src/app/model/nationality';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteActorComponent } from '../delete-actor/delete-actor.component';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
})
export class ActorDetailComponent implements OnInit {
  public idPerson: string;
  public filmsPlayed: Film[];
  public person: Person;
  public nationalities: Nationality[];

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idPerson = this.activatedRoute.snapshot.params['idPerson'];
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
  }

  // go to upgrate actor
  public goToUpgrateActor(person: Person) {
    console.log('go to modify the actor :', person);
    this.router.navigate(['/upgrate-actor', person.idPerson]);
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
  // dialog
  public openDialog() {
    this.dialog
      .open(DeleteActorComponent, {
        data: { name: this.person },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.deleteActor(this.person);
          this.snackbar
            .open(
              `the actor "${this.person.firstName} ${this.person.lastName} - ${this.person.birthdate}" has been deleted`,
              '',
              {
                duration: 3000,
                verticalPosition: 'top',
              }
            )
            .afterDismissed()
            .subscribe((a) => {
              this.router.navigate(['/person']);
            });
        }
      });
  }
}
