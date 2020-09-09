import { Film } from './film';
import { Nationality } from './nationality';

export class Person {
  public idPerson: string;
  public lastName: string;
  public firstName: string;
  public birthdate: Date;
  public filmsPlayed: Film[];
  public filmDirited: Film[];
  public nationalities: Nationality[];

  constructor() {
    this.filmsPlayed = [];
    this.nationalities = [];
    this.filmDirited = [];
  }
}
