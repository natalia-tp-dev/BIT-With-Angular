import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
    {path: 'home', component: Home, title: 'Stranger-Things'},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
