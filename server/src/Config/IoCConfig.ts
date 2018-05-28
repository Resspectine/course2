import { UserValidator, UserValidatorToken } from '../User/User.validator';
import { UserService, UserServiceToken } from '../User/User.service';
import { DictionaryService, DictionaryServiceToken } from '../Dictionaries/Dictionary.service';
import { UserController, UserControllerToken } from '../User/User.controller';
import { DictionaryController, DictionaryControllerToken } from '../Dictionaries/Dictionary.controller';
import { Container } from 'inversify';
import { ArticleValidator, ArticleValidatorToken } from '../Article/article.validator';
import { ArticleService, ArticleServiceToken } from '../Article/article.service';
import { ArticleController, ArticleControllerToken } from '../Article/article.controller';
import { HashtagService, HashtagServiceToken } from '../Article/Hashtag/hashtag.service';
import { ArticleRatingService, ArticleRatingServiceToken } from '../Article/Rating/articleRating.service';

export function registerDependencies(container: Container): void {

    // Validators
    container.bind(UserValidatorToken).to(UserValidator);
    container.bind(ArticleValidatorToken).to(ArticleValidator);

    // Services
    container.bind(DictionaryServiceToken).to(DictionaryService);
    container.bind(UserServiceToken).to(UserService);
    container.bind(ArticleServiceToken).to(ArticleService);
    container.bind(HashtagServiceToken).to(HashtagService);
    container.bind(ArticleRatingServiceToken).to(ArticleRatingService);

    // Controllers
    container.bind(DictionaryControllerToken).to(DictionaryController);
    container.bind(UserControllerToken).to(UserController);
    container.bind(ArticleControllerToken).to(ArticleController);
}