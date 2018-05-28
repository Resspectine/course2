import { Component } from '@angular/core';
import { IArticle } from '../news/news.component';
import { getEmptyArticle } from '../../shared/utils';

@Component({
  selector: 'create-article',
  templateUrl: 'createArticle.component.html',
  styleUrls: ['createArticle.component.scss']
})

export class CreateArticleComponent {

  article: IArticle = getEmptyArticle();

  constructor() {
  }

  postArticle(article: IArticle): void {
    console.log(article);
  }
}
