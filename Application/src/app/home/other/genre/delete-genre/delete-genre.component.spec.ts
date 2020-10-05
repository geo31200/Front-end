import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { DeleteGenreComponent } from './delete-genre.component';

describe('DeleteGenreComponent', () => {
  let component: DeleteGenreComponent;
  let fixture: ComponentFixture<DeleteGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteGenreComponent],
      imports: [MatDialogModule, MatDialogRef, MAT_DIALOG_DATA],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
