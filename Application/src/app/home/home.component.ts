import { Component, OnInit } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['../../assets/téléchargement.jpg', '../../assets/téléchargement (1).jpg', '../../assets/téléchargement (2).jpg'];
}
