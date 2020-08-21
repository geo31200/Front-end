import { Genre } from 'src/app/model/genre';
import { Person } from 'src/app/model/person';
export class Film {
  public idFilm: string;
  public title: string;
  public year: number;
  public duration: number;
  public genres: Genre[];
  public director: Person;
  public actors: Person[];

  constructor() {
    this.genres = [];
    this.actors = [];
  }
}
