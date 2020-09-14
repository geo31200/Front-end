import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit {
  public order: string = 'genre.nameGenres';
  public genre: Genre;
  public genres: Genre[];
  public idGenre: string;
  public genreLength: number;
  public panelOpenState: boolean = false;

  constructor(
    private genreService: GenreService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getAllGenre();
  }

  public getAllGenre() {
    this.genreService.getAllGenre().subscribe((genre) => {
      this.genres = genre;
      this.genreLength = genre.length;
      console.log(genre, genre.length);
    });
  }

  //go To Add Genre

  public goToAddGenre() {
    this.router.navigate(['add-genre']);
  }

  // go to detail Genre

  public detailGenre(genre: Genre) {
    this.snackbar
      .open('You will be directed to this genre', `${genre.nameGenres}`, {
        duration: 3000,
        verticalPosition: 'top',
      })
      .afterDismissed()
      .subscribe((a) => {
        this.router.navigate(['/detail-genre', genre.idGenre]);
      });
  }
}
