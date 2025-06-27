import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteData {

  constructor() { }
  get title(): string {
    return SITE_DATA.title;
  }
  get nav_buttons(): any[] {
    return SITE_DATA.nav_buttons;
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

