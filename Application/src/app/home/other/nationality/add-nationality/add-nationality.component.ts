import { Component, OnInit } from '@angular/core';
import { Nationality } from 'src/app/model/nationality';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NationalityService } from 'src/app/service/nationality.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-nationality',
  templateUrl: './add-nationality.component.html',
  styleUrls: ['./add-nationality.component.css'],
})
export class AddNationalityComponent implements OnInit {
  public nationality: Nationality;
  public nationalityForm: FormGroup;

  constructor(
    private nationalityService: NationalityService,
    private router: Router,
    private formbuilder: FormBuilder,
    public snackbar: MatSnackBar
  ) {
    this.nationality = new Nationality();
  }

  ngOnInit(): void {
    this.nationalityForm = this.formbuilder.group({
      country: ['', Validators.required],
    });
  }

  public addNationality() {
    this.nationality.country = this.nationalityForm.value.country;

    this.nationalityService.addNationality(this.nationality).subscribe(
      (data) => {
        this.nationality = data;
        console.log('The nationality', data.country, 'has been added');
        this.snackbar
          .open(`The nationality "${data.country}" has been created`, '', {
            duration: 2000,
            verticalPosition: 'top',
          })
          .afterDismissed()
          .subscribe((a) => {
            this.router.navigate(['/nationality']);
          });
      },
      (err) => {
        console.log(err);

        alert(
          `Tous les champs ne sont pas bien rempli ou le genre "${this.nationalityForm.value.country}" existe déjà `
        );
      }
    );
  }
}
