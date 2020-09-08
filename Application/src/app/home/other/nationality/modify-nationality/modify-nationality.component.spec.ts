import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNationalityComponent } from './modify-nationality.component';

describe('ModifyNationalityComponent', () => {
  let component: ModifyNationalityComponent;
  let fixture: ComponentFixture<ModifyNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
