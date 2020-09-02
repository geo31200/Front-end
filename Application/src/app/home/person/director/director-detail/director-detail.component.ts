import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Person } from 'src/app/model/person';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css'],
})
export class DirectorDetailComponent implements OnInit {
  public idPerson: string;
  public person: Person;

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.person = new Person();
  }

  ngOnInit(): void {
    this.idPerson = this.activatedRoute.snapshot.params['idPerson'];

    this.personService.getDirectorById(this.idPerson).subscribe((director) => {
      console.log('le director est ', director);
      this.person = director;
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
  public goToUpgrateActor(person: Person) {
    console.log('go to modify the director :', person);
    this.router.navigate(['/upgrate-director', person.idPerson]);
  }
}
