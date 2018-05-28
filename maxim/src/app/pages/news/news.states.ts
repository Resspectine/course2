import { Routes } from '@angular/router';
import { NewsComponent } from './news.component';

export const newsStates: Routes = [{
  path: 'categories/:categoryId/:id',
  component: NewsComponent
}];
