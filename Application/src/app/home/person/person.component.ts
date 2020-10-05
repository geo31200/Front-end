import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Person } from 'src/app/model/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  public alldirector: Person[];
  public allactor: Person[];
  public person: Person;
  public idPerson: string;
  public directorLength: number;
  public actorLength: number;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.allDirector();
    this.allActor();
  }

  //get director
  public allDirector() {
    this.personService.getAllDirector().subscribe((director) => {
      this.alldirector = director;
      this.directorLength = director.length;
      console.log('director', director);
    });
  }
  //go To Add Director

  public goToAddDirector() {
    this.router.navigate(['add-director']);
  }

  //go To detail Director
  public detailDirector(person: Person) {
    console.log(person);
    this.router.navigate(['/director-detail', person.idPerson]);
  }

  // get actor
  public allActor() {
    this.personService.getAllActor().subscribe((actor) => {
      this.allactor = actor;
      this.actorLength = actor.length;
      console.log('Actors : ', actor);
    });
  }

  //go To Add addActor

  public goToAddActor() {
    this.router.navigate(['add-actor']);
  }
  // go to detail actor
  public detailActor(person: Person) {
    console.log(person.firstName, person.lastName);
    this.router.navigate(['/detail-actor', person.idPerson]);
  }
}
