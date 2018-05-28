import { DictionaryService, DictionaryServiceToken } from './Dictionary.service';
import { Response, Request, Express } from 'express';
import { inject, injectable } from 'inversify';
import { LolNewsController } from '../Globals/Models';
import { constants as HTTP_STATUS_CODES } from 'http2';

export const DictionaryControllerToken = Symbol.for('DictionaryController');

@injectable()
export class DictionaryController extends LolNewsController {

    public constructor(
        @inject(DictionaryServiceToken) private dictionaryService: DictionaryService
    ) {
        super();
    }

    public async getAllArticleCategories(req: Request, res: Response) {
        try {
            const articles = await this.dictionaryService.getAllArticleCategories();
            res.send(articles);
        } catch (error) {
            res.sendStatus(HTTP_STATUS_CODES.HTTP_STATUS_INTERNAL_SERVER_ERROR);
            console.log(error);
        }
    }

    public async getAllHashtags(req: Request, res: Response) {
        try {
            res.send(await this.dictionaryService.getAllHashtags());
        } catch (error) {
            console.log(error);
        }
    }

    public async getAllUserRoles(req: Request, res: Response) {
        try {
            res.send(await this.dictionaryService.getAllUserRoles());
        } catch (error) {
            console.log(error);
        }
    }

    public registerRoutes(app: Express): void {
        app.get(
            '/api/dictionary/articleCategory/all',
            (req: Request, res: Response) => this.getAllArticleCategories(req, res)
        );
        app.get(
            '/api/dictionary/hashtag/all',
            (req: Request, res: Response) => this.getAllHashtags(req, res)
        );
        app.get(
            '/api/dictionary/userrole/all',
            (req: Request, res: Response) => this.getAllUserRoles(req, res)
        );
    }
}