import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {LatestNewsModule} from './latest-news/latest-news.module';
import {TopNewsModule} from './top-news/top-news.module';

@NgModule({
  imports: [
    SharedModule,
    LatestNewsModule,
    TopNewsModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
