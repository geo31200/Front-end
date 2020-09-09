import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-upgrate-actor',
  templateUrl: './upgrate-actor.component.html',
  styleUrls: ['./upgrate-actor.component.css'],
})
export class UpgrateActorComponent implements OnInit {
  public person: Person;
  public idPerson: string;
  public personForm: FormGroup;

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.person = new Person();
  }

  ngOnInit(): void {
    this.idPerson = this.activatedRoute.snapshot.params['idPerson'];

    console.log("l'id du director est", this.idPerson);

    this.personForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }

  public upgrateActor() {
    this.person.idPerson = this.idPerson;

    this.person.lastName = this.personForm.value.lastName;
    this.person.firstName = this.personForm.value.firstName;
    this.person.birthdate = this.personForm.value.birthdate;

    this.personService.putActor(this.person).subscribe((actor) => {
      console.log(actor);
    });
    console.log(
      'le actor est devenu : ',
      this.person.firstName,
      this.person.lastName,
      'né le : ',
      this.person.birthdate
    );

    this.router.navigate(['/person']);
  }
}
