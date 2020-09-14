import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-director',
  templateUrl: './delete-director.component.html',
  styleUrls: ['./delete-director.component.css'],
})
export class DeleteDirectorComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public matDialogRef: MatDialogRef<DeleteDirectorComponent>
  ) {}

  ngOnInit(): void {}

  public closeDialog() {
    this.matDialogRef.close(false);
  }
}
