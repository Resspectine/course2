import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../providers/login.service';
import {IMediumNewsPreview} from '../../shared/components/medium-preview/medium-preview.component';

export interface IProfile {
  username: string;
  description: string;
  role: number;
}

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  isEditableMode = false;
  profile: IProfile;
  articlesArray: IMediumNewsPreview[];

  constructor(private route: ActivatedRoute,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    const userToken: string = this.route.snapshot.paramMap.get('userToken');
    if (userToken.length < 5) {
      // TODO: navigate to error
      this.router.navigate(['/error'], {
        queryParams: {
          code: 404,
          message: 'Not found'
        }
      });
      console.log('error');
    }
    this.getProfile(userToken);
    this.getArticles(userToken);
  }

  async getProfile(userToken: string): Promise<IProfile> {
    this.profile = await this.loginService.getProfile(userToken);
    return this.profile;
  }

  async getArticles(userToken: string): Promise<IMediumNewsPreview[]> {
    this.articlesArray = await this.loginService.getArticles(userToken);
    return this.articlesArray;
  }
}
