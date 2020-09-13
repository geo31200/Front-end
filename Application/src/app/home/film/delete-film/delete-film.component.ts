import { Component, OnInit, Inject } from '@angular/core';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-film',
  templateUrl: './delete-film.component.html',
  styleUrls: ['./delete-film.component.css'],
})
export class DeleteFilmComponent implements OnInit {
  public film: Film;
  public idFilm: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get id film from route
  }
  // delete film
  public deleteFilm(film: Film) {
    this.filmService.deleteFilm(film).subscribe((data) => {
      console.log('le film', film, ' a été supprimé');
    });

    this.router.navigate(['/film']);
  }
}
