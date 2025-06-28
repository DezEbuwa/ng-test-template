import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../auth-service';
import { FormsModule } from '@angular/forms';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-router-guards-demo',
  imports: [MatCardModule, FormsModule, MatRadioModule, MatChipsModule, CommonModule, RouterLink, MatButtonModule],
  templateUrl: './router-guards-demo.html',
  styleUrl: './router-guards-demo.css'
})
export class RouterGuardsDemo {
  isAuthorized = signal(false);
  constructor(private authService: AuthService) {
    this.isAuthorized.set(this.authService.isAuthenticated);
  }

  update($event: MatRadioChange) {
    const value = $event.value;
    this.isAuthorized.set(value === 'allow');
    // This method is called when the radio button selection changes
    this.authService.isAuthenticated = this.isAuthorized();
  } 
}
