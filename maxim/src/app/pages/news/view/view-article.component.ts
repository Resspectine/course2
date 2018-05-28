import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticle } from '../news.component';

@Component({
  selector: 'view-article',
  templateUrl: 'view-article.component.html',
})

export class ViewArticleComponent {
  @Input() article: IArticle;
  @Output() onEditClick = new EventEmitter();

  constructor() {
  }

}
