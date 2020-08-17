import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from 'src/app/model/film';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {


  public films : Observable<[Film]>;
  public film : Film = new Film;
  public movieForm: FormGroup;
  
  constructor(
    private filmService: FilmService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

 

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title: [ '', Validators.required ],
      year: [ '', Validators.required ],
      duration: [ '', Validators.required ]
    
    })
  }

  public addFilm (){

    let film = new Film;

film.title = this.movieForm.value.title 
film.year = this.movieForm.value.year
film.duration = this.movieForm.value.duration

    this.filmService.postFilm(film).subscribe(data =>{
      console.log(data)
  })
  this.router.navigate(['/film'])
}

 
  
}
