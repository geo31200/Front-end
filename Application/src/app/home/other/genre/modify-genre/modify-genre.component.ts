import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { GenreService } from 'src/app/service/genre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modify-genre',
  templateUrl: './modify-genre.component.html',
  styleUrls: ['./modify-genre.component.css'],
})
export class ModifyGenreComponent implements OnInit {
  public genre: Genre;
  public genres: Genre[];
  public idGenre: string;
  public genreForm: FormGroup;

  constructor(
    private genreService: GenreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.genre = new Genre();
  }

  ngOnInit(): void {
    this.idGenre = this.activatedRoute.snapshot.params['idGenre'];
    console.log("l'id du genre est", this.idGenre);

    this.genreForm = this.formBuilder.group({
      nameGenres: ['', Validators.required],
    });
    this.genreService.getGenreById(this.idGenre).subscribe((genre) => {
      this.genre = genre;
    });
  }

  public upgrateGenre() {
    this.genre.idGenre = this.idGenre;
    this.genre.nameGenres = this.genreForm.value.nameGenres;

    this.genreService.upgrateGenre(this.genre).subscribe((genre) => {});
    this.snackbar
      .open(`Your ${this.genre.nameGenres} has been modify`, '', {
        duration: 2000,
        verticalPosition: 'top',
      })
      .afterDismissed()
      .subscribe((a) => {
        this.router.navigate(['/genre']);
      });
  }
}
