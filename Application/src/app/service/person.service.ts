import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiRoute = 'http://localhost:8080/api';

  constructor(public http: HttpClient) {}

  // Actor

  //get
  public getAllActor(): Observable<any> {
    return this.http.get(`${this.apiRoute}/actor`);
  }

  public getActorById(idPerson: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/actor/idActor?id=${idPerson}`);
  }

  public getActorByLastName(lastName: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/actor/byLastName?l=${lastName}`);
  }

  public getActorByNationality(idNationality: string): Observable<any> {
    return this.http.get(
      `${this.apiRoute}/actor/idNationality?id=${idNationality}`
    );
  }
  //post
  public postActor(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiRoute}/actor/addActor`, person);
  }

  //put
  public putActor(person: Person): Observable<Person> {
    return this.http.put<Person>(
      `${this.apiRoute}/actor/modifyActor?id=${person.idPerson}`,
      person
    );
  }

  //delete
  public deleteActor(person: Person): Observable<Person> {
    return this.http.delete<Person>(
      `${this.apiRoute}/actor/deleteActor?id=${person.idPerson}`
    );
  }

  // Director

  //get
  public getAllDirector(): Observable<any> {
    return this.http.get(`${this.apiRoute}/director`);
  }

  public getDirectorById(idPerson: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/director/idDirector?id=${idPerson}`);
  }

  public getDirectorByLastName(lastName: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/director/byLastName?l=${lastName}`);
  }

  public getDirectorByNationality(idNationality: string): Observable<any> {
    return this.http.get(
      `${this.apiRoute}/director/idNationality?id=${idNationality}`
    );
  }

  //post
  public postDirector(person: Person): Observable<Person> {
    return this.http.post<Person>(
      `${this.apiRoute}/director/addDirector`,
      person
    );
  }

  //put
  public putDirector(person: Person): Observable<Person> {
    return this.http.put<Person>(
      `${this.apiRoute}/director/modifyDirector`,
      person
    );
  }

  //delete
  public deleteDirector(person: Person): Observable<Person> {
    return this.http.delete<Person>(
      `${this.apiRoute}/director/deleteDirector?id=${person.idPerson}`
    );
  }

  // Writer
}
