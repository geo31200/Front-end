import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { DirectorDetailComponent } from './director-detail.component';

describe('DirectorDetailComponent', () => {
  let component: DirectorDetailComponent;
  let fixture: ComponentFixture<DirectorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorDetailComponent],
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
    fixture = TestBed.createComponent(DirectorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
