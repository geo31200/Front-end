import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { Film } from 'src/app/model/film';

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
  constructor(
    private genreService: GenreService,
    private filmService: FilmService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    });
  }

  public goToModifyGenre(genre: Genre) {
    console.log('En route pour modifier le genre', genre);
    this.router.navigate(['/modify-genre', genre.idGenre]);
  }
}
