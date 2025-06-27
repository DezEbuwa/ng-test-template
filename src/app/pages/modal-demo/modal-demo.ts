import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalDialog } from './modal-dialog';
import { SiteData } from '../../site-data';

@Component({
  selector: 'app-modal-demo',
  imports: [MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './modal-demo.html',
  styleUrl: './modal-demo.css'
})
export class ModalDemo {
  constructor(private sds: SiteData) {} 
  readonly dialog = inject(MatDialog);
  openModal() {
    const dialogRef = this.dialog.open(ModalDialog, {
      data: {
        content: this.sds.speechForModal
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }

}
