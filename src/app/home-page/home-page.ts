import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-home-page',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
