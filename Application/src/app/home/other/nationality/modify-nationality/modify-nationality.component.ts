import { Component, OnInit } from '@angular/core';
import { Nationality } from 'src/app/model/nationality';
import { NationalityService } from 'src/app/service/nationality.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modify-nationality',
  templateUrl: './modify-nationality.component.html',
  styleUrls: ['./modify-nationality.component.css'],
})
export class ModifyNationalityComponent implements OnInit {
  public nationality: Nationality;

  public nationalities: Nationality[];
  public idNationality: string;
  public nationalityForm: FormGroup;
  constructor(
    private nationalityService: NationalityService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.nationality = new Nationality();
  }

  ngOnInit(): void {
    this.idNationality = this.activatedRoute.snapshot.params['idNationality'];
    console.log("l'id du country est", this.idNationality);

    this.nationalityForm = this.formBuilder.group({
      country: ['', Validators.required],
    });

    this.nationalityService
      .getNationalityById(this.idNationality)
      .subscribe((nationality) => {
        this.nationality = nationality;
      });
  }

  public upgrateNationality() {
    this.nationality.idNationality = this.idNationality;
    this.nationality.country = this.nationalityForm.value.country;

    this.nationalityService
      .upgrateNationality(this.nationality)
      .subscribe((nationality) => {});
    this.snackbar
      .open(`Your ${this.nationality.country} has been modify`, '', {
        duration: 2000,
        verticalPosition: 'top',
      })
      .afterDismissed()
      .subscribe((a) => {
        this.router.navigate(['/nationality']);
      });
  }
}
