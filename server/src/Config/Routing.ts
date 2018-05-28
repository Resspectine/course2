import { Container } from 'inversify';
import { Express } from 'express';
import { LolNewsController } from '../Globals/Models';
import { DictionaryControllerToken } from '../Dictionaries/Dictionary.controller';
import { UserControllerToken } from '../User/User.controller';
import { ArticleControllerToken } from '../Article/article.controller';

export function registerRoutes(app: Express, container: Container) {
    const controllers: LolNewsController[] = [
        container.get(DictionaryControllerToken),
        container.get(UserControllerToken),
        container.get(ArticleControllerToken)
    ];
    controllers.forEach((controller: LolNewsController) => controller.registerRoutes(app));
}