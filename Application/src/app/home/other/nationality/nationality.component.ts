import { Component, OnInit } from '@angular/core';
import { Nationality } from 'src/app/model/nationality';
import { NationalityService } from 'src/app/service/nationality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css'],
})
export class NationalityComponent implements OnInit {
  public nationality: Nationality;
  public nationalities: Nationality[];
  public idNationality: string;

  constructor(
    private nationalityService: NationalityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllNationality();
  }

  public getAllNationality() {
    this.nationalityService.getAllNationality().subscribe((nationality) => {
      this.nationalities = nationality;
      console.log(nationality);
    });
  }

  public detailNationality(nationality: Nationality) {
    this.router.navigate(['detail-nationality', nationality.idNationality]);
  }

  //go To Add Genre

  public goToAddNationality() {
    this.router.navigate(['add-nationality']);
  }
}
