import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNationalityComponent } from './delete-nationality.component';

describe('DeleteNationalityComponent', () => {
  let component: DeleteNationalityComponent;
  let fixture: ComponentFixture<DeleteNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
