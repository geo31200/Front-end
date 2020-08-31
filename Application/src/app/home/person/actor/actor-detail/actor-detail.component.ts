import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { Film } from 'src/app/model/film';
import { PersonService } from 'src/app/service/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
})
export class ActorDetailComponent implements OnInit {
  public actor: Person;
  public idPerson: string;
  public film: Film[];

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idPerson = this.route.snapshot.params['idPerson'];
    this.actor = new Person();
    this.personService.getActorById(this.idPerson).subscribe((actor) => {
      console.log(actor);
    });
  }
}
