import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
 import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule],
  template: `
    <mat-card class="content-card">
      <mat-card-header>
        <mat-card-title>Login</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form (ngSubmit)="onSubmit()">
          <mat-form-field appearance="fill">
            <mat-label>Email</mat-label>
            <input matInput type="email" [(ngModel)]="email" name="email" required>
          </mat-form-field>
          <br />
          <mat-form-field appearance="fill">
            <mat-label>Password</mat-label>
            <input matInput type="password" [(ngModel)]="password" name="password" required>
          </mat-form-field>
          <br />
          <button mat-raised-button color="primary" type="submit">Login</button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``
})
export class LoginPage {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  } 

}
