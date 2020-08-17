import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgrateFilmComponent } from './upgrate-film.component';

describe('UpgrateFilmComponent', () => {
  let component: UpgrateFilmComponent;
  let fixture: ComponentFixture<UpgrateFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgrateFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgrateFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
