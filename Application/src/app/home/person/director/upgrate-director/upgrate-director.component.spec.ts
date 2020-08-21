import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgrateDirectorComponent } from './upgrate-director.component';

describe('UpgrateDirectorComponent', () => {
  let component: UpgrateDirectorComponent;
  let fixture: ComponentFixture<UpgrateDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgrateDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgrateDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
