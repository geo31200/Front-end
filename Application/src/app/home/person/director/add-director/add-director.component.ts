import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { PersonService } from 'src/app/service/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-director',
  templateUrl: './add-director.component.html',
  styleUrls: ['./add-director.component.css'],
})
export class AddDirectorComponent implements OnInit {
  public person: Person;
  public directorForm: FormGroup;

  constructor(
    private personService: PersonService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.directorForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }

  public addDirector() {
    let person = new Person();

    person.lastName = this.directorForm.value.lastName;
    person.firstName = this.directorForm.value.firstName;
    person.birthdate = this.directorForm.value.birthdate;

    this.personService.postDirector(person).subscribe((data) => {
      console.log(' Le director ', data, 'a été crée');
    });

    this.router.navigate(['add-film']);
  }
}
