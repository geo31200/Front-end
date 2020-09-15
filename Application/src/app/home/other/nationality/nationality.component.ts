import { Component, OnInit } from '@angular/core';
import { Nationality } from 'src/app/model/nationality';
import { NationalityService } from 'src/app/service/nationality.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css'],
})
export class NationalityComponent implements OnInit {
  public country: string;
  public nationality: Nationality;
  public nationalityFiltered: Nationality[];
  public nationalities: Nationality[];
  public nationalityLength: number;
  public searchForm: FormGroup;
  public show: boolean = false;

  constructor(
    private nationalityService: NationalityService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      nationality: ['', Validators.compose([Validators.required])],
    });
    this.getAllNationality();
  }

  public getAllNationality() {
    this.nationalityService.getAllNationality().subscribe((nationality) => {
      this.nationalities = nationality;
      this.nationalityLength = nationality.length;
      this.nationalityFiltered = nationality;
      console.log(nationality);
    });
  }

  //search Nationality
  public searchNationality(): void {
    if (this.country) {
      this.nationalityFiltered = this.nationalities.filter((f) =>
        f.country.toLocaleLowerCase().match(this.country.toLocaleLowerCase())
      );
    } else {
      this.nationalityFiltered = this.nationalities;
    }
  }

  // go to detail nationality

  public detailNationality(nationality: Nationality) {
    console.log(nationality.idNationality, nationality.country);
    this.router.navigate(['detail-nationality', nationality.idNationality]);
  }

  //go To Add Genre

  public goToAddNationality() {
    this.router.navigate(['add-nationality']);
  }
}
