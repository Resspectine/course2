import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMediumNewsPreview } from '../shared/components';
import { IArticle } from '../pages/news/news.component';
import { ISmallNewsPreview } from '../shared/components';
import { IAppConfig } from './appConfig';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient,
              @Inject('APP_CONFIG') private config: IAppConfig) {
  }

  getLatestNews(): Promise<IMediumNewsPreview[]> {
    // return this.http.get('some uri').toPromise();
    return this.http.get<IMediumNewsPreview[]>(`${this.config.apiEndpoint}/article/all`).toPromise();
    // return Promise.resolve(new Array(10).fill('').map((_, i) => ({
    //   id: i.toString(),
    //   articleCategory: {
    //     name: 'Technology',
    //     id: '0'
    //   },
    //   rating: 5,
    //   title: 'Why Everyone Missed the Most Mind-Blowing Feature of Cryptocurrency',
    //   description: 'There’s one incredible feature of cryptocurrencies that almost everyone seems to have missed, including Satoshi himself.',
    //   createdBy: 'Stefanenko Maxim',
    //   createdAt: new Date(),
    //   tags: [{
    //     name: 'tag1',
    //     id: '0'
    //   }]
    // })));
  }

  getTopNews(): Promise<ISmallNewsPreview[]> {
    // return this.http.get('some uri').toPromise();
    return Promise.resolve(new Array(5).fill('').map(() => ({
      id: '0',
      articleCategory: {
        name: 'Technology',
        id: '0'
      },
      rating: 5,
      title: 'Why Everyone Missed the Most Mind-Blowing Feature of Cryptocurrency',
      createdBy: 'Stefanenko Maxim',
      createdAt: new Date(),
    })));
  }

  getArticle(id: string): any {
    id = '28385450-bdb5-41a3-b6bd-1b9baa76baad';
    return this.http.get<IArticle>(`${this.config.apiEndpoint}/article/${id}`).toPromise();
  }
}
