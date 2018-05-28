import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { homeStates } from '../home/home.states';
import { newsStates } from '../news/news.states';
import { profileStates } from '../profile/profile.states';
import { createArticleStates } from '../createArticle/createArticle.states';

export const mainStates: Routes = [{
  path: '',
  component: MainComponent,
  children: [...homeStates, ...newsStates, ...profileStates, ...createArticleStates],
}];
