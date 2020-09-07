import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nationality } from '../model/nationality';

@Injectable({
  providedIn: 'root',
})
export class NationalityService {
  private apiRoute = 'http://localhost:8080/api/nationality';

  constructor(public http: HttpClient) {}

  public getAllNationality(): Observable<Nationality[]> {
    return this.http.get<Nationality[]>(`${this.apiRoute}`);
  }

  public getNationalityById(idNationality: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/idNationality?id=${idNationality}`);
  }

  public getNationalityByCountry(country: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/country?c=${country}`);
  }

  public addNationality(nationality: Nationality): Observable<Nationality> {
    return this.http.post<Nationality>(
      `${this.apiRoute}/addNationality`,
      nationality
    );
  }

  public upgrateNationality(nationality: Nationality): Observable<Nationality> {
    return this.http.put<Nationality>(
      `${this.apiRoute}/modifyNationality`,
      nationality
    );
  }

  public deleteNationality(nationality: Nationality): Observable<Nationality> {
    return this.http.delete<Nationality>(
      `${this.apiRoute}/deleteNationality?id=${nationality.idNationality}`
    );
  }
}
