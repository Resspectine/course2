import { LolNewsController } from '../Globals/Models';
import { Express, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ArticleService, ArticleServiceToken } from './article.service';
import { Article, ArticleListQueryParams } from './article.models';
import { constants as HTTP_STATUS_CODES } from 'http2';

export const ArticleControllerToken = Symbol.for('ArticleController');

@injectable()
export class ArticleController extends LolNewsController {

    public constructor(
        @inject(ArticleServiceToken) private articleService: ArticleService
    ) {
        super();
    }

    public async postArticle(req: Request, res: Response) {
        try {
            const articleToPost = req.body as Article;
            const article = await this.articleService.postArticle(articleToPost);
            res.send(article);
        } catch (error) {
            res.sendStatus(HTTP_STATUS_CODES.HTTP_STATUS_BAD_REQUEST);
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const article = await this.articleService.getById(req.params.articleId);
            res.send(article);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const qp: ArticleListQueryParams = {
                skip: parseInt(req.query.skip, 10),
                take: parseInt(req.query.take, 10)
            };
            if (qp.skip < 0 || qp.take > 20) {
                res.sendStatus(HTTP_STATUS_CODES.HTTP_STATUS_BAD_REQUEST);
            }
            const articles = await this.articleService.getAll(qp);
            res.send(articles);
        } catch (error) {
            console.log(error);
            res.sendStatus(HTTP_STATUS_CODES.HTTP_STATUS_BAD_REQUEST);
        }
    }

    public registerRoutes(app: Express): void {
        app.post(
            '/api/article/create',
            (req: Request, res: Response) => this.postArticle(req, res)
        );
        app.get(
            '/api/article/all',
            (req: Request, res: Response) => this.getAll(req, res)
        );
        app.get(
            '/api/article/:articleId',
            (req: Request, res: Response) => this.getById(req, res)
        );
    }
}