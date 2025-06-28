import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-protected-route',
  imports: [MatCardModule],
  template: `
    <mat-card class="content-card">
      <mat-card-header>
        <mat-card-title>YOU HAVE REACHED A PROTECTED ROUTE</mat-card-title>
        <mat-card-subtitle>This route is protected and requires authentication.</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>Only authenticated users can access this route.</p>
        <p>If you are not authenticated, you will be redirected to the login page.</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``
})
export class ProtectedRoute {

}
