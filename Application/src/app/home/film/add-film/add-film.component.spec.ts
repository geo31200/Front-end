import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Film } from 'src/app/model/film';
import { Nationality } from 'src/app/model/nationality';
import { FilmService } from 'src/app/service/film.service';

import { AddFilmComponent } from './add-film.component';

describe('AddFilmComponent', () => {
  let component: AddFilmComponent;
  let fixture: ComponentFixture<AddFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFilmComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSnackBarModule,
      ],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be creat a movie', () => {});
});
