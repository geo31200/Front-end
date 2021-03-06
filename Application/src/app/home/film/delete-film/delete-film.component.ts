import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-film',
  templateUrl: './delete-film.component.html',
  styleUrls: ['./delete-film.component.css'],
})
export class DeleteFilmComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public matDialogRef: MatDialogRef<DeleteFilmComponent>
  ) {}

  ngOnInit(): void {}

  public closeDialog() {
    this.matDialogRef.close(false);
  }
}
