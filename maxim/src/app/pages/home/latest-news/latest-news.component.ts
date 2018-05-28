import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../providers/news.service';
import { IMediumNewsPreview } from '../../../shared/components/medium-preview/medium-preview.component';

@Component({
  selector: 'latest-news',
  templateUrl: 'latest-news.component.html',
  styleUrls: ['latest-news.component.scss']
})

export class LatestNewsComponent implements OnInit {
  latestNews: IMediumNewsPreview[];

  constructor(private newsService: NewsService) {
  }

  async ngOnInit() {
    this.latestNews = await this.newsService.getLatestNews();
  }
}
