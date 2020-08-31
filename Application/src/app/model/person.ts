import { Film } from './film';

export class Person {
  public idPerson: string;
  public lastName: string;
  public firstName: string;
  public birthdate: Date;
  public film: Film[];
  idDirector: any;

  constructor() {
    this.film = [];
  }
}
