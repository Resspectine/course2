import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const profileStates: Routes = [{
  path: 'profile/:userToken',
  component: ProfileComponent
}];
