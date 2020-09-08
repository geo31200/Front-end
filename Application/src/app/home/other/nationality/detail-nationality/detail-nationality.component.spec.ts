import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNationalityComponent } from './detail-nationality.component';

describe('DetailNationalityComponent', () => {
  let component: DetailNationalityComponent;
  let fixture: ComponentFixture<DetailNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
