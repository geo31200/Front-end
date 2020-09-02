import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../model/film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiRoute = 'http://localhost:8080/api/film';

  constructor(public http: HttpClient) {}

  public getAllFilm(): Observable<any> {
    return this.http.get(`${this.apiRoute}`);
  }
  public getFilmById(idFilm: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/idFilm?id=${idFilm}`);
  }

  public getFilmByTitle(title: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/title?t=${title}`);
  }
  public postFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(`${this.apiRoute}/addFilm`, film);
  }

  public upgrateFilm(film: Film): Observable<Film> {
    return this.http.put<Film>(
      `${this.apiRoute}/modifyFilm?id=${film.idFilm}`,
      film
    );
  }

  public deleteFilm(film: Film): Observable<Film> {
    return this.http.delete<Film>(
      `${this.apiRoute}/deleteFilm?id=${film.idFilm}`
    );
  }
}
