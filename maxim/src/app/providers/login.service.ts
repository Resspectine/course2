import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfile } from '../pages/profile/profile.component';
import { IMediumNewsPreview } from '../shared/components';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  loginUser(login: string, password: string): Promise<string> {
    return Promise.resolve('username');
  }

  getProfile(userToken: string): Promise<IProfile> {
    // TODO: cookie parser
    return Promise.resolve({
      username: 'kek',
      description: '__Advertisement :)__\n' +
      '\n' +
      '- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n' +
      '  resize in browser.\n' +
      '- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n' +
      '  i18n with plurals support and easy syntax.\n' +
      '\n' +
      'You will like those projects!\n',
      role: 3,
    });
  }

  getArticles(userToken: string): Promise<IMediumNewsPreview[]> {
    return Promise.resolve(new Array(3).fill('').map((_, i) => ({
      id: i.toString(),
      articleCategoryId: {id: '1', name: 'technology'},
      rating: 5,
      title: 'Why Everyone Missed the Most Mind-Blowing Feature of Cryptocurrency',
      description: 'There’s one incredible feature of cryptocurrencies that almost everyone seems to have missed, including Satoshi himself.',
      createdBy: 'Stefanenko Maxim',
      createdAt: new Date(),
      tags: []
    })));
  }

  getRole(userToken: string): number {
    // TODO: parsing role from cookie
    return 1;
  }
}
