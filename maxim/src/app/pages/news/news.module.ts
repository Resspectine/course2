import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { SharedModule } from '../../shared/shared.module';
import { ViewArticleComponent } from './view/view-article.component';
import { EditArticleComponent } from './edit/edit-article.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    NewsComponent,
    ViewArticleComponent,
    EditArticleComponent
  ],
  declarations: [
    NewsComponent,
    ViewArticleComponent,
    EditArticleComponent
  ],
  providers: [],
})
export class NewsModule {
}
