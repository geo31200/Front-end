import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/service/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-upgrate-film',
  templateUrl: './upgrate-film.component.html',
  styleUrls: ['./upgrate-film.component.css']
})
export class UpgrateFilmComponent implements OnInit {

  public films : Observable<[Film]>;
  public film : Film
  public idFilm : string
  public movieForm: FormGroup;

  constructor(
    private filmservice : FilmService,
    private route: ActivatedRoute,
    private router : Router,
    private formBuilder: FormBuilder,
  ) { }

  

  ngOnInit(): void {
    
    this.movieForm = this.formBuilder.group({
      title: [ '', Validators.required ],
      year: [ '', Validators.required ],
      duration: [ '', Validators.required ]
    
    })

  }

public upgrateFilm(){
this.filmservice.upgrateFilm(this.film).subscribe(data => {
  console.log(data)
  this.film = new Film
})

}

}
