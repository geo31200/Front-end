import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css'],
})
export class AddActorComponent implements OnInit {
  public person: Person;
  public actorForm: FormGroup;

  constructor(
    private personService: PersonService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.actorForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }

  public addActor() {
    let person = new Person();

    person.lastName = this.actorForm.value.lastName;
    person.firstName = this.actorForm.value.firstName;
    person.birthdate = this.actorForm.value.birthdate;

    this.personService.postActor(person).subscribe((data) => {
      console.log(" L'acteur", data, 'a été crée');
    });

    this.router.navigate(['add-film']);
  }
}
