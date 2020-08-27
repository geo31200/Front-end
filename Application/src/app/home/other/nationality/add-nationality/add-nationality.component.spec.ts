import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNationalityComponent } from './add-nationality.component';

describe('AddNationalityComponent', () => {
  let component: AddNationalityComponent;
  let fixture: ComponentFixture<AddNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
