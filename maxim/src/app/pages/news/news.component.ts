import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../providers/news.service';

export interface IObjectWithId {
  id: string;
  name: string;
}

export interface IArticle {
  id?: string;
  createdAt?: Date;
  createdBy?: string;
  title: string;
  description: string;
  content: string;
  tags: IObjectWithId[]
  articleCategory: IObjectWithId;
  rating?: number;
}


@Component({
  selector: 'news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class NewsComponent implements OnInit {
  isEditableMode = false;
  article: IArticle;

  constructor(private route: ActivatedRoute,
              private newsService: NewsService,
              private router: Router) {
  }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/error']);
      // TODO: navigate to error
    }
    this.getArticle(id);
  }

  async getArticle(id: string): Promise<IArticle> {
    this.article = await this.newsService.getArticle(id);
    return this.article;
  }
}
