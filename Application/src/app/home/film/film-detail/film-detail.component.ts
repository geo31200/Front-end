import { Component, OnInit } from '@angular/core';
import { FilmService} from '../../../service/film.service';
import { Film } from 'src/app/model/film';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  public films : Observable<[Film]>;
  public film : Film
  public idFilm : string
  
  

  constructor(
    private filmservice : FilmService,
    private route: ActivatedRoute,
    private router : Router
    
  ) { }

  ngOnInit(): void {
 

    // get id from route
    this.idFilm = this.route.snapshot.params['idFilm'];
 this.film = new Film;
this.filmservice.getFilmById(this.idFilm)
      .subscribe(data => {
        console.log(data)
        this.film = data;}
        , error => console.log(error))

  }

  public goToUpgrateFilm(film : Film){

    console.log(film)
    this.router.navigate(['/upgrate-film', film.idFilm])
  }


  }
