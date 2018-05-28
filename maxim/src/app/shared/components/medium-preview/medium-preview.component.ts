import { Component, Input } from '@angular/core';
import { IObjectWithId } from '../../../pages/news/news.component';

export interface IMediumNewsPreview {
  id: string;
  articleCategoryId: IObjectWithId
  rating: number;
  title: string;
  description: string;
  createdBy: string;
  createdAt: Date;
  tags: IObjectWithId[]
}

@Component({
  selector: 'medium-preview',
  templateUrl: 'medium-preview.component.html',
  styleUrls: ['medium-preview.component.scss']
})

export class MediumPreviewComponent {
  @Input() preview: IMediumNewsPreview;
}
