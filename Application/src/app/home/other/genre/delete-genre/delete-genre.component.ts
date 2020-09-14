import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-genre',
  templateUrl: './delete-genre.component.html',
  styleUrls: ['./delete-genre.component.css'],
})
export class DeleteGenreComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public matDialogRef: MatDialogRef<DeleteGenreComponent>
  ) {}

  ngOnInit(): void {}

  public closeDialog() {
    this.matDialogRef.close(false);
  }
}
