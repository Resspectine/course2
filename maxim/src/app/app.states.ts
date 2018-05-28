import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { errorStates } from './pages/error/error.state';

export const appStates: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AppComponent,
}, ...errorStates];
