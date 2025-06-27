import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatDialogModule, MatButtonModule, MatCardModule],
  template: `
  <mat-card class="modal-dialog">
    <mat-card-title>Modal Dialog</mat-card-title>
    <mat-card-subtitle>Material Dialog window we call a "modal window"</mat-card-subtitle>
    <mat-card-content [innerHTML]="content" [style.overflow]="'auto'" [style.height.px]="'600'"></mat-card-content>
    <mat-dialog-actions align="end">
      <button matButton mat-dialog-close>Close</button>  
    </mat-dialog-actions>
  </mat-card>  
  `,
  styles: `
    .modal-dialog {
        width: 500px;
        padding: 20px;
    }
  `
})
export class ModalDialog {
  content: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.content = data.content;
  }
}
