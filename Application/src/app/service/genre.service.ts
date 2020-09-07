import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../model/genre';
@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private apiRoute = 'http://localhost:8080/api/genre';

  constructor(public http: HttpClient) {}

  public getAllGenre(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.apiRoute}`);
  }

  public getGenreById(idGenre: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/idGenre?id=${idGenre}`);
  }

  public getGenreByName(nameGenre: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/nameGenre?n=${nameGenre}`);
  }

  public addGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(`${this.apiRoute}/addGenre`, genre);
  }

  public upgrateGenre(genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(`${this.apiRoute}/modifyGenre`, genre);
  }

  public deleteGenre(genre: Genre): Observable<Genre> {
    return this.http.delete<Genre>(
      `${this.apiRoute}/deleteGenre?id=${genre.idGenre}`
    );
  }
}
