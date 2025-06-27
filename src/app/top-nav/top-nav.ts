import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SiteData } from '../site-data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-top-nav',
  imports: [
    MatIconModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatMenuModule, 
    CommonModule, 
    RouterLink
  ],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.css'
})
export class TopNav {
  site_title: string = '';
  nav_buttons: any[] = [];
  constructor(private sds: SiteData) { 
    this.site_title = this.sds.title;
    this.nav_buttons = this.sds.nav_buttons;
  }
}
