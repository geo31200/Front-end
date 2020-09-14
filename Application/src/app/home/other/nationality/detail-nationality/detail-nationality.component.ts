import { Component, OnInit } from '@angular/core';
import { Nationality } from 'src/app/model/nationality';
import { Film } from 'src/app/model/film';
import { Person } from 'src/app/model/person';
import { FilmService } from 'src/app/service/film.service';
import { PersonService } from 'src/app/service/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NationalityService } from 'src/app/service/nationality.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteNationalityComponent } from '../delete-nationality/delete-nationality.component';

@Component({
  selector: 'app-detail-nationality',
  templateUrl: './detail-nationality.component.html',
  styleUrls: ['./detail-nationality.component.css'],
})
export class DetailNationalityComponent implements OnInit {
  public idNationality: string;
  public nationality: Nationality;
  public nationalities: Nationality[];
  public filmByNationality: Film[];
  public actorsByNationality: Person[];
  public directorsByNationality: Person[];

  constructor(
    private filmService: FilmService,
    private nationalityService: NationalityService,
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idNationality = this.activatedRoute.snapshot.params['idNationality'];
    console.log('the country is : ', this.idNationality);
    this.nationality = new Nationality();

    this.nationalityService
      .getNationalityById(this.idNationality)
      .subscribe((nationality) => {
        console.log(nationality);
        this.nationality = nationality;
      });
    //get film by nationality
    this.filmService
      .getFilmByNationality(this.idNationality)
      .subscribe((dataFilmByNationality) => {
        console.log('film by nationality', dataFilmByNationality);
        this.filmByNationality = dataFilmByNationality;
      });

    // get actor by nationality
    this.personService
      .getActorByNationality(this.idNationality)
      .subscribe((dataActorByNationality) => {
        console.log('actors by nationality', dataActorByNationality);
        this.actorsByNationality = dataActorByNationality;
      });

    // get director by nationality
    this.personService
      .getDirectorByNationality(this.idNationality)
      .subscribe((dataDirectorByNationality) => {
        console.log('director by nationality', dataDirectorByNationality);
        this.directorsByNationality = dataDirectorByNationality;
      });
  }
  // delete nationalty
  public deleteNationality(nationality: Nationality) {
    this.nationalityService.deleteNationality(nationality).subscribe((data) => {
      console.log('The genders has been deleted');
    });
  }

  // go to modify nationality
  public goToModifyNationality(nationality: Nationality) {
    this.router.navigate(['/modify-nationality', nationality.idNationality]);
  }

  //detail Actor
  public detailActor(person: Person) {
    console.log(
      "l'actor est : ",
      person.idPerson,
      person.firstName,
      person.lastName
    );
    this.router.navigate(['/detail-actor', person.idPerson]);
  }

  //detail Actor
  public detailDirector(person: Person) {
    console.log(
      'le director est : ',
      person.idPerson,
      person.firstName,
      person.lastName
    );
    this.router.navigate(['/director-detail', person.idPerson]);
  }
  // detail film
  public detailFilm(film: Film) {
    console.log(film.idFilm, film.title);
    this.router.navigate(['/film-detail', film.idFilm]);
  }

  // dialog
  public openDialog() {
    this.dialog
      .open(DeleteNationalityComponent, {
        data: { name: this.nationality },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.deleteNationality(this.nationality);
          this.snackbar
            .open(
              `the nationality "${this.nationality.country}" has been deleted`,
              '',
              {
                duration: 3000,
                verticalPosition: 'top',
              }
            )
            .afterDismissed()
            .subscribe((a) => {
              this.router.navigate(['/nationality']);
            });
        }
      });
  }
}
