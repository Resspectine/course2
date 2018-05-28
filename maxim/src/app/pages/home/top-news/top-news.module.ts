import {NgModule} from '@angular/core';

import {TopNewsComponent} from './top-news.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [TopNewsComponent],
  declarations: [TopNewsComponent],
  providers: [],
})
export class TopNewsModule {
}
