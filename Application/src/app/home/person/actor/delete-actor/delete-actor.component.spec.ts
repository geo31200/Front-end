import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DeleteActorComponent } from './delete-actor.component';

describe('DeleteActorComponent', () => {
  let component: DeleteActorComponent;
  let fixture: ComponentFixture<DeleteActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteActorComponent],
      imports: [MatDialogRef, MAT_DIALOG_DATA, MatDialogModule],
      providers: [],
    }).compileComponents();
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
