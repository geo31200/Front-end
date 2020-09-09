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
import { Nationality } from 'src/app/model/nationality';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NationalityService } from 'src/app/service/nationality.service';

@Component({
  selector: 'app-add-director',
  templateUrl: './add-director.component.html',
  styleUrls: ['./add-director.component.css'],
})
export class AddDirectorComponent implements OnInit {
  public person: Person;
  public lastNameFormGroup: FormGroup;
  public firstNameFormGroup: FormGroup;
  public birthdateFormGroup: FormGroup;
  public nationalityFormGroup: FormGroup;
  public showNationality: boolean = false;

  public country: string;
  public nationality: Nationality;
  public nationalities: Nationality[];
  public allnationality: Nationality[];
  public nationalityFiltered: Nationality[];

  constructor(
    private personService: PersonService,
    private router: Router,
    private formBuilder: FormBuilder,
    public snackbar: MatSnackBar,
    private nationalityService: NationalityService
  ) {
    this.nationalities = [];
  }

  ngOnInit(): void {
    this.lastNameFormGroup = this.formBuilder.group({
      lastName: ['', Validators.required],
    });
    this.firstNameFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
    });
    this.birthdateFormGroup = this.formBuilder.group({
      birthdate: ['', Validators.required],
    });

    this.nationalityFormGroup = this.formBuilder.group({
      nationality: [''],
    });
    this.allNationality();
  }

  public addDirector() {
    let person = new Person();

    person.lastName = this.lastNameFormGroup.value.lastName;
    person.firstName = this.firstNameFormGroup.value.firstName;
    person.birthdate = this.birthdateFormGroup.value.birthdate;

    person.nationalities.push(...this.nationalities);

    this.personService.postDirector(person).subscribe((data) => {
      console.log(" L'acteur", data, 'a été crée');
    });
    this.snackbar
      .open('Your director has been created', '', {
        duration: 2000,
        verticalPosition: 'top',
      })
      .afterDismissed()
      .subscribe((a) => {
        this.router.navigate(['person']);
      });
  }

  //search nationality
  public searchNationality(): void {
    if (this.country) {
      this.nationalityFiltered = this.allnationality.filter((n) =>
        n.country.toLocaleLowerCase().match(this.country.toLocaleLowerCase())
      );
    } else {
      this.nationalityFiltered = this.allnationality;
    }
  }

  //go To Add nationality

  public goToAddNationality() {
    this.router.navigate(['add-nationality']);
  }

  //get nationality
  public allNationality() {
    this.nationalityService.getAllNationality().subscribe((nationality) => {
      this.nationalityFiltered = nationality;
      this.allnationality = nationality;
      console.log('nationality', nationality);
    });
  }
  // addNationalitiesOnList

  public addNationalityOnList(nationality: Nationality) {
    const index = this.nationalities.indexOf(nationality);
    if (index < 0) {
      this.nationalities.push(nationality);
      this.showNationality = true;
      console.log(nationality);
    } else {
      alert(` The nationality, ${nationality.country}, has been already added`);
    }
  }

  //deleteNationalityOnList

  public deleteNationalityOnList(nationality: Nationality) {
    const index = this.nationalities.indexOf(nationality);
    if (index >= 0) {
      this.nationalities.splice(index, 1);

      console.log(
        `The nationality, ${nationality.country}, has been deleted on the list of nationaties`
      );
    }
  }
}
