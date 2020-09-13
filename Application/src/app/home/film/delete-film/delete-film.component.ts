import { Component, OnInit, Inject } from '@angular/core';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-film',
  templateUrl: './delete-film.component.html',
  styleUrls: ['./delete-film.component.css'],
})
export class DeleteFilmComponent implements OnInit {
  public film: Film;
  public idFilm: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public matDialogRef: MatDialogRef<DeleteFilmComponent>,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // delete film
  public deleteFilm(film: Film) {
    this.filmService.deleteFilm(film).subscribe((de) => {});
    this.router.navigate(['/film']);
  }

  public closeDialog() {
    this.matDialogRef.close(false);
  }
}
