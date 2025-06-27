import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { TableDemo } from './pages/table-demo/table-demo';
import { ModalDemo } from './pages/modal-demo/modal-demo';
import { SignalsDemo } from './pages/signals-demo/signals-demo';
import { RouterGuardsDemo } from './pages/router-guards-demo/router-guards-demo';
import { Contributors } from './pages/contributors/contributors';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' }, // Default route
  { path: 'home', component: HomePage, title: 'Home Page' }, 
  { path: 'table', component: TableDemo, title: 'Table Demo' },  
  { path: 'modal', component: ModalDemo, title: 'Modal Demo' },  
  { path: 'signals', component: SignalsDemo, title: 'Signals Demo' }, 
  { path: 'router-guards', component: RouterGuardsDemo, title: 'Router Guards Demo' },  
  { path: 'contributors', component: Contributors, title: 'Contributors' }, 
];
