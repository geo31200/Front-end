import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/service/genre.service';
import { Router } from '@angular/router';
import { Genre } from 'src/app/model/genre';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css'],
})
export class AddGenreComponent implements OnInit {
  public genre: Genre;
  public genreForm: FormGroup;

  constructor(
    private genreService: GenreService,
    private router: Router,
    private formbuilder: FormBuilder,
    public snackbar: MatSnackBar
  ) {
    this.genre = new Genre();
  }

  ngOnInit(): void {
    this.genreForm = this.formbuilder.group({
      nameGenres: ['', Validators.required],
    });
  }

  public addGenre() {
    this.genre.nameGenres = this.genreForm.value.nameGenres;

    this.genreService.addGenre(this.genre).subscribe(
      (data) => {
        this.genre = data;
        console.log('The genre', data.nameGenres, 'has been added');
        this.snackbar
          .open(`The genre "${data.nameGenres}" has been created`, '', {
            duration: 2000,
            verticalPosition: 'top',
          })
          .afterDismissed()
          .subscribe((a) => {
            this.router.navigate(['/genre']);
          });
      },
      (err) => {
        console.log('error', err);

        alert(`le genre "${this.genreForm.value.nameGenres}" existe déjà `);
      }
    );
  }
}
