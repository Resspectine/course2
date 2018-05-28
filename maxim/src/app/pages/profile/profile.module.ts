import {NgModule} from '@angular/core';

import {ProfileComponent} from './profile.component';
import {SharedModule} from '../../shared/shared.module';
import {ViewProfileComponent} from './view/view-profile.component';
import {EditProfileComponent} from './edit/edit-profile.component';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [
    ProfileComponent,
    ViewProfileComponent,
    EditProfileComponent,
  ],
  providers: [],
})
export class ProfileModule {
}
