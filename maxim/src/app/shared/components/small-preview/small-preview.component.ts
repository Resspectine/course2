import { Component, Input } from '@angular/core';
import { IObjectWithId } from '../../../pages/news/news.component';

export interface ISmallNewsPreview {
  id: string;
  articleCategory: IObjectWithId;
  rating: number;
  title: string;
  createdBy: string;
  createdAt: Date;
}

@Component({
  selector: 'small-preview',
  templateUrl: 'small-preview.component.html',
  styleUrls: ['small-preview.component.scss'],
})

export class SmallPreviewComponent {
  @Input() preview: ISmallNewsPreview;
}
