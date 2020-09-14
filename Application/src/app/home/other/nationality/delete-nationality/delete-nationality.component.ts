import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-nationality',
  templateUrl: './delete-nationality.component.html',
  styleUrls: ['./delete-nationality.component.css'],
})
export class DeleteNationalityComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public matDialogRef: MatDialogRef<DeleteNationalityComponent>
  ) {}

  ngOnInit(): void {}

  public closeDialog() {
    this.matDialogRef.close(false);
  }
}
