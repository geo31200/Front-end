import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-actor',
  templateUrl: './delete-actor.component.html',
  styleUrls: ['./delete-actor.component.css'],
})
export class DeleteActorComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public matDialogRef: MatDialogRef<DeleteActorComponent>
  ) {}

  ngOnInit(): void {}

  public closeDialog() {
    this.matDialogRef.close(false);
  }
}
