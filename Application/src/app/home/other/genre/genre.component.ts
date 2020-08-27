import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit {
  public genre: Genre;

  constructor() {}

  ngOnInit(): void {}
}
