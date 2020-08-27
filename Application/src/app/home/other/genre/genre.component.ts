import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Router } from '@angular/router';

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

  constructor(private genreService: GenreService, private router: Router) {}

  ngOnInit(): void {
    this.getAllGenre();
  }

  public getAllGenre() {
    this.genreService.getAllGenre().subscribe((genre) => {
      this.genres = genre;
      console.log(genre);
    });
  }

  public deleteGenre(genre: Genre) {
    this.genreService.deleteGenre(genre).subscribe((data) => {
      console.log('The genders has been deleted');
    });
    this.getAllGenre();
  }

  //go To Add Genre

  public goToAddGenre() {
    this.router.navigate(['add-genre']);
  }
}
