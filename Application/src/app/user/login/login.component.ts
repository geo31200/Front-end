import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Nationality } from 'src/app/model/nationality';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NationalityService } from 'src/app/service/nationality.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User;
  public country: string;
  public nationality: Nationality;
  public nationalities: Nationality[];
  public allnationality: Nationality[];
  public nationalityFiltered: Nationality[];

  public lastNameFormGroup: FormGroup;
  public firstNameFormGroup: FormGroup;
  public birthdateFormGroup: FormGroup;
  public emailFormGroup: FormGroup;
  public passwordFormGroup: FormGroup;
  public nationalityFormGroup: FormGroup;

  public showNationality: boolean = false;
  constructor(
    private nationalityService: NationalityService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    public snackbar: MatSnackBar
  ) {
    this.user = new User();
    this.nationalities = [];
  }

  ngOnInit(): void {
    this.lastNameFormGroup = this.formBuilder.group({
      lastName: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(13),
          Validators.required,
        ]),
      ],
    });
    this.firstNameFormGroup = this.formBuilder.group({
      firstName: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(13),
          Validators.required,
        ]),
      ],
    });
    this.birthdateFormGroup = this.formBuilder.group({
      birthdate: ['', Validators.required],
    });
    this.emailFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
    });
    this.passwordFormGroup = this.formBuilder.group({
      password: [
        '',
        Validators.compose([Validators.minLength(8), Validators.required]),
      ],
    });

    this.nationalityFormGroup = this.formBuilder.group({
      nationality: ['', Validators.required],
    });

    this.allNationality();
  }

  // add New User
  public addUser() {
    this.user.lastName = this.lastNameFormGroup.value.lastName;
    this.user.firstName = this.firstNameFormGroup.value.firstName;
    this.user.bithdate = this.birthdateFormGroup.value.birthdate;

    this.user.email = this.emailFormGroup.value.email;
    this.user.nationality = this.nationalityFormGroup.value.nationality;

    this.userService.postSimpleUser(this.user).subscribe((user) => {
      console.log('the user is : ', user);
    });
  }

  // Connexion
  public connexion() {}

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

  //get nationality
  public allNationality() {
    this.nationalityService.getAllNationality().subscribe((nationality) => {
      this.nationalityFiltered = nationality;
      this.allnationality = nationality;
      console.log('nationality', nationality);
    });
  }
}
