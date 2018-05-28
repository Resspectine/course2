import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header/header.module';
import { RouterModule } from '@angular/router';
import { appStates } from 'app/app.states';
import { MainModule } from './pages/main/main.module';
import { HomeModule } from './pages/home/home.module';
import { NewsService } from './providers/news.service';
import { HttpClientModule } from '@angular/common/http';
import { StaticService } from './providers/static.service';
import { NewsModule } from './pages/news/news.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './providers/login.service';
import { ProfileModule } from './pages/profile/profile.module';
import { ErrorModule } from './pages/error/error.module';
import { CreateArticleModule } from './pages/createArticle/createArticle.module';
import { APP_CONFIG } from './providers/appConfig';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    RouterModule.forRoot(appStates),
    MarkdownModule.forRoot({
      provide: MarkedOptions,
      useValue: {
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: true,
        sanitize: false,
        smartLists: true,
        smartypants: true,
      },
    }),
    MainModule,
    HomeModule,
    NewsModule,
    ProfileModule,
    ErrorModule,
    CreateArticleModule,
  ],
  providers: [
    NewsService,
    StaticService,
    LoginService,
    { provide: 'APP_CONFIG', useValue: APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
