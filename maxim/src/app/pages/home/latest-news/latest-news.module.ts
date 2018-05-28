import { NgModule } from '@angular/core';
import { LatestNewsComponent } from './latest-news.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [LatestNewsComponent],
  declarations: [LatestNewsComponent],
  providers: [],
})
export class LatestNewsModule {
}
