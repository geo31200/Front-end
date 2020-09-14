import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { Film } from 'src/app/model/film';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteGenreComponent } from '../delete-genre/delete-genre.component';

@Component({
  selector: 'app-detail-genre',
  templateUrl: './detail-genre.component.html',
  styleUrls: ['./detail-genre.component.css'],
})
export class DetailGenreComponent implements OnInit {
  public idGenre: string;
  public genre: Genre;
  public genres: Genre[];
  public FilmByGenre: Film[];

  public filmLength: number;

  constructor(
    private genreService: GenreService,
    private filmService: FilmService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idGenre = this.activatedRoute.snapshot.params['idGenre'];

    this.genre = new Genre();

    this.genreService.getGenreById(this.idGenre).subscribe((genre) => {
      console.log(genre);
      this.genre = genre;
    });

    this.filmService.getFilmByGenre(this.idGenre).subscribe((genre) => {
      this.FilmByGenre = genre;
      this.filmLength = genre.length;

      console.log(genre);
    });
  }

  public detailFilm(film: Film) {
    console.log(film.idFilm, film.title);
    this.router.navigate(['/film-detail', film.idFilm]);
  }

  public goToModifyGenre(genre: Genre) {
    console.log('En route pour modifier le genre', genre);
    this.router.navigate(['/modify-genre', genre.idGenre]);
  }

  // delete film
  public deleteGenre(genre: Genre) {
    this.genreService.deleteGenre(genre).subscribe((de) => {});
  }

  // dialog
  public openDialog() {
    this.dialog
      .open(DeleteGenreComponent, {
        data: { name: this.genre },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.deleteGenre(this.genre);
          this.snackbar
            .open(`the genre "${this.genre.nameGenres}" has been deleted`, '', {
              duration: 3000,
              verticalPosition: 'top',
            })
            .afterDismissed()
            .subscribe((a) => {
              this.router.navigate(['/genre']);
            });
        }
      });
  }
}
