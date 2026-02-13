import { Routes } from '@angular/router';
import { Intro } from './pages/intro/intro';
import { Eyes } from './pages/eyes/eyes';
import { Smile } from './pages/smile/smile';
import { Promise } from './pages/promise/promise';

export const routes: Routes = [
  { path: '', component: Intro },
  { path: 'eyes', component: Eyes },
  { path: 'smile', component: Smile },
  { path: 'promise', component: Promise }
];
