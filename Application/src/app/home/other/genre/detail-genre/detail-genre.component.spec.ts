import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGenreComponent } from './detail-genre.component';

describe('DetailGenreComponent', () => {
  let component: DetailGenreComponent;
  let fixture: ComponentFixture<DetailGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
