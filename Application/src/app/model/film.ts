import { Genre } from 'src/app/model/genre';
import { Person } from 'src/app/model/person';
import { Nationality } from './nationality';
export class Film {
  public idFilm: string;
  public title: string;
  public year: Date;
  public duration: number;
  public genres: Genre[];
  public director: Person;
  public actors: Person[];
  public nationalities: Nationality[];

  constructor() {
    this.nationalities = [];
    this.genres = [];
    this.actors = [];
    this.director = new Person();
  }
}
