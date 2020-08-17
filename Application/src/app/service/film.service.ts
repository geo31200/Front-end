import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../model/film';



@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiRoute = 'http://localhost:8080/api/film';

  constructor(public http : HttpClient) { }

  public  getAllFilm(): Observable<any> { 
    return this.http.get(`${this.apiRoute}`)
  }
  public getFilmById(idFilm: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/idFilm?id=${idFilm}`);
  }

  public postFilm(film : Film): Observable<any>{
    return this.http.post(`${this.apiRoute}/addFilm`, film);
  }
  public upgrateFilm( film : Film): Observable<any>{
    return this.http.put(`${this.apiRoute}/modifyFilm?t=${film.title}&y=${film.year}&d=${film.duration}`, film);
   }

  public deleteFilm(title : string): Observable<any>{
    return this.http.delete(`${this.apiRoute}/deleteFilm?t=${title}`);
  }

}



