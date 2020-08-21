import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgrateActorComponent } from './upgrate-actor.component';

describe('UpgrateActorComponent', () => {
  let component: UpgrateActorComponent;
  let fixture: ComponentFixture<UpgrateActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgrateActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgrateActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
