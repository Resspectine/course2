import {Routes} from '@angular/router';
import {ErrorComponent} from './error.component';

export const errorStates: Routes = [{
  path: '**',
  component: ErrorComponent,
}, {
  path: 'error/:params',
  component: ErrorComponent,
}];
