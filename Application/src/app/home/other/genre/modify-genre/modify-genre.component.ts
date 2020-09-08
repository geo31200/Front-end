import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-genre',
  templateUrl: './modify-genre.component.html',
  styleUrls: ['./modify-genre.component.css'],
})
export class ModifyGenreComponent implements OnInit {
  public genre: Genre;
  public genres: Genre[];
  public idGenre: string;
  constructor(private genreService: GenreService, private router: Router) {}

  ngOnInit(): void {}

  public deleteGenre(genre: Genre) {
    this.genreService.deleteGenre(genre).subscribe((data) => {
      console.log('The genders has been deleted');
    });
    this.router.navigate(['/genre']);
  }
}
