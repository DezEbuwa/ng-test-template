import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { TableDemo } from './pages/table-demo/table-demo';
import { ModalDemo } from './pages/modal-demo/modal-demo';
import { SignalsDemo } from './pages/signals-demo/signals-demo';
import { RouterGuardsDemo } from './pages/router-guards-demo/router-guards-demo';
import { Contributors } from './pages/contributors/contributors';

export const routes: Routes = [
  { path: '', component: HomePage }, 
  { path: 'home', component: HomePage }, 
  { path: 'table', component: TableDemo }, 
  { path: 'modal', component: ModalDemo }, 
  { path: 'signals', component: SignalsDemo }, 
  { path: 'router-guards', component: RouterGuardsDemo }, 
  { path: 'contributors', component: Contributors }, 
];
