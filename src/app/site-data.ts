import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteData {
  actorDataURL = 'assets/data/slj_filmography.json';
  constructor(private http: HttpClient) { }
  get title(): string {
    return SITE_DATA.title;
  }
  get nav_buttons(): any[] {
    return SITE_DATA.nav_buttons;
  }

  async getActorData(): Promise<any> {
    return firstValueFrom(this.http.get(this.actorDataURL, { responseType: 'json' }));
  }
}

const SITE_DATA = { 
  title: 'Angular Test Template',
  nav_buttons: [
    { name: 'Home', route: '/home'},
    { name: 'UI Components', subMenu: [
        { name: 'Table', route: '/table' },
        { name: 'Modal', route: '/modal' },
      ] 
    },
    { name: 'Cool Features', subMenu: [
        { name: 'Signals', route: '/signals'},
        { name: 'Router Guards', route: '/router-guards' },
      ]
    }
  ]
}
