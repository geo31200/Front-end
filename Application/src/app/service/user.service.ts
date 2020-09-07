import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiRoute = 'http://localhost:8080/api';

  constructor(public http: HttpClient) {}

  // Admin

  //get
  public getAllAdmin(): Observable<any> {
    return this.http.get(`${this.apiRoute}/admin`);
  }

  public getAdminById(idUser: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/admin/idAdmin?id=${idUser}`);
  }

  public getAdminByLastName(lastName: string): Observable<any> {
    return this.http.get(`${this.apiRoute}/admin/byLastName?l=${lastName}`);
  }
  //post
  public postAdmin(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiRoute}/admin/addAdmin`, user);
  }

  //put
  public putAdmin(user: User): Observable<User> {
    return this.http.put<User>(
      `${this.apiRoute}/admin/modifyAdmin?id=${user.idUser}`,
      user
    );
  }

  //delete
  public deleteAdmin(user: User): Observable<User> {
    return this.http.delete<User>(
      `${this.apiRoute}/admin/deleteAdmin?id=${user.idUser}`
    );
  }

  // SimpleUser

  //get
  public getAllSimpleUser(): Observable<any> {
    return this.http.get(`${this.apiRoute}/simpleUser`);
  }

  public getSimpleUserById(idUser: string): Observable<any> {
    return this.http.get(
      `${this.apiRoute}/simpleUser/idsimpleUser?id=${idUser}`
    );
  }

  public getSimpleUserByLastName(lastName: string): Observable<any> {
    return this.http.get(
      `${this.apiRoute}/simpleUser/byLastName?l=${lastName}`
    );
  }
  //post
  public postSimpleUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiRoute}/simpleUser/addSimpleUser`,
      user
    );
  }

  //put
  public putSimpleUser(user: User): Observable<User> {
    return this.http.put<User>(
      `${this.apiRoute}/simpleUser/modifySimpleUser?id=${user.idUser}`,
      user
    );
  }

  //delete
  public deleteSimpleUser(user: User): Observable<User> {
    return this.http.delete<User>(
      `${this.apiRoute}/simpleUser/deleteSimpleUser?id=${user.idUser}`
    );
  }
}
