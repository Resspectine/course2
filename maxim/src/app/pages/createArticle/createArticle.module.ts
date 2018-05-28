import { NgModule } from '@angular/core';
import { CreateArticleComponent } from './createArticle.component';
import { NewsModule } from '../news/news.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NewsModule
  ],
  declarations: [CreateArticleComponent],
})
export class CreateArticleModule {
}
