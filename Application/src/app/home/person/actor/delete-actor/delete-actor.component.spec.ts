import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActorComponent } from './delete-actor.component';

describe('DeleteActorComponent', () => {
  let component: DeleteActorComponent;
  let fixture: ComponentFixture<DeleteActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
