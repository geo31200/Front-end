import { Component, OnInit } from '@angular/core';
import { Nationality } from 'src/app/model/nationality';
import { Film } from 'src/app/model/film';
import { Person } from 'src/app/model/person';
import { FilmService } from 'src/app/service/film.service';
import { PersonService } from 'src/app/service/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NationalityService } from 'src/app/service/nationality.service';

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
    private activatedRoute: ActivatedRoute
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
  public deleteNationality(nationality: Nationality) {
    this.nationalityService.deleteNationality(nationality).subscribe((data) => {
      console.log('The genders has been deleted');
    });
  }
  public goToModifyNationality(nationality: Nationality) {
    this.router.navigate(['/modify-nationality', nationality.idNationality]);
  }
}
