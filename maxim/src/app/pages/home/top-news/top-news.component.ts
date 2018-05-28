import {Component, OnInit} from '@angular/core';
import {ISmallNewsPreview} from '../../../shared/components/small-preview/small-preview.component';
import {NewsService} from '../../../providers/news.service';

@Component({
  selector: 'top-news',
  templateUrl: 'top-news.component.html',
  styleUrls: ['top-news.component.scss'],
})

export class TopNewsComponent implements OnInit {
  topNews: ISmallNewsPreview[];

  constructor(private newsService: NewsService) {
  }

  async ngOnInit() {
    this.topNews = await this.newsService.getTopNews();
  }
}
