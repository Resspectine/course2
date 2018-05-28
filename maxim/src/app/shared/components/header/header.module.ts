import {NgModule} from '@angular/core';

import {TopHeaderComponent} from './top-header/top-header.component';
import {BottomHeaderComponent} from './bottom-header/bottom-header.component';
import {SharedModule} from '../../shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    TopHeaderComponent,
  ],
  declarations: [
    TopHeaderComponent,
    BottomHeaderComponent,
  ],
  providers: [],
})
export class HeaderModule {
}
