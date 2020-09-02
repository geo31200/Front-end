import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upgrate-director',
  templateUrl: './upgrate-director.component.html',
  styleUrls: ['./upgrate-director.component.css'],
})
export class UpgrateDirectorComponent implements OnInit {
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

  public upgrateDirector() {
    this.person.lastName = this.personForm.value.lastName;
    this.person.firstName = this.personForm.value.firstName;
    this.person.birthdate = this.personForm.value.birthdate;

    this.personService.putDirector(this.person).subscribe((director) => {
      console.log(director);
    });
    console.log(
      'le director est devenu : ',
      this.person.firstName,
      this.person.lastName,
      'né le : ',
      this.person.birthdate
    );

    this.router.navigate(['/person']);
  }
}
