import { Component, OnInit } from '@angular/core';

import { FilmService } from 'src/app/service/film.service';
import { Observable } from 'rxjs';
import { Film } from 'src/app/model/film';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public films: Observable<[Film]>;
  public film: Film
  public title: string

  constructor(
    private FilmService: FilmService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.allFilm();

  }


  public allFilm() {
    this.films = this.FilmService.getAllFilm()
  }

  public detailFilm(film: Film) {

    console.log(film.idFilm, film.title)
    this.router.navigate(['/film-detail', film.idFilm]);
  }

  public onClick() {

  }

  public deleteFilm(film: Film) {

    console.log(film.title)

    this.FilmService.deleteFilm(film.title).subscribe(
      data => {
        console.log(data);
      })
      
     this.ngOnInit();
  }

  public goToAddFilm (){
    this.router.navigate(['/add-film'])
  }

}
