import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiRoute = 'http://localhost:8080/api';

  constructor(public http : HttpClient) { }

  
 // Actor

 //get
public getAllActor():Observable<any> {
  return this.http.get(`${this.apiRoute}/actor`)
}

public getActorById(idPerson : string):Observable<any> {
  return this.http.get(`${this.apiRoute}/actor/idActor?id=${idPerson}`)
}

public getActorByLastName (lastName : string):Observable<any>{
  return this.http.get(`${this.apiRoute}/actor/byLastName?l=${lastName}`)
}
//post
public postActor ( person : Person): Observable<Person>{
  return this.http.post<Person>(`${this.apiRoute}/actor/addActor`, person)
}

//put
public putActor ( person : Person): Observable<Person>{
  return this.http.put<Person>(`${this.apiRoute}/actor/modifyActor`, person)
}

//delete
public deleteActor (person : Person): Observable<Person>{
  return this.http.delete<Person>(`${this.apiRoute}/actor/deleteActor?id=${person.idPerson}`)
}



// Director


//get
public getAllDirecor():Observable<any> {
  return this.http.get(`${this.apiRoute}/director`)
}

public getDirecorById(idPerson : string):Observable<any> {
  return this.http.get(`${this.apiRoute}/director/idDirecor?id=${idPerson}`)
}

public getDirecorByLastName (lastName : string):Observable<any>{
  return this.http.get(`${this.apiRoute}/director/byLastName?l=${lastName}`)
}
//post
public postDirecor ( person : Person): Observable<Person>{
  return this.http.post<Person>(`${this.apiRoute}/director/addDirecor`, person)
}

//put
public putDirecor ( person : Person): Observable<Person>{
  return this.http.put<Person>(`${this.apiRoute}/director/modifyDirecor`, person)
}

//delete
public deleteDirecor (person : Person): Observable<Person>{
  return this.http.delete<Person>(`${this.apiRoute}/actor/deleteDirecor?id=${person.idPerson}`)
}






// Writer
}
