import {inject, injectable} from 'inversify';
import {ArticleValidator, ArticleValidatorToken} from './article.validator';
import {Article, ArticleListQueryParams, ArticleReduced} from './article.models';
import {ArticleEntity} from '../DbEntities/Article';
import {sequelizeConnection} from '../Config/DBConnection';
import {HashtagService, HashtagServiceToken} from './Hashtag/hashtag.service';
import {DictionaryService, DictionaryServiceToken} from '../Dictionaries/Dictionary.service';
import {ArticleRatingService, ArticleRatingServiceToken} from './Rating/articleRating.service';

export const ArticleServiceToken = Symbol.for('ArticleService');

@injectable()
export class ArticleService {

    public constructor(
        @inject(ArticleValidatorToken) private articleValidator: ArticleValidator,
        @inject(HashtagServiceToken) private hashtagService: HashtagService,
        @inject(DictionaryServiceToken) private dictionaryService: DictionaryService,
        @inject(ArticleRatingServiceToken) private articleRatingService: ArticleRatingService
    ) {
    }

    public async postArticle(article: Article): Promise<Article> {
        await this.articleValidator.validateArticle(article);
        let createdArticle: Article = undefined;
        await sequelizeConnection.transaction(async (t: any) => {
            createdArticle = (await ArticleEntity.create({
                    createdAt: new Date(),
                    createdBy: 'moquser', // TODO change to a real one
                    title: article.title,
                    description: article.description,
                    content: article.content,
                    articleCategoryId: article.articleCategory.id,
                    rating: article.rating
                }
            ) as any).dataValues;
            await this.hashtagService.addArticleTags(createdArticle.id, article.tags);
        });
        return this.getById(createdArticle.id);
    }

    public async getById(articleId: string): Promise<Article> {

        const article = (await ArticleEntity.findById(articleId)).dataValues;
        const articleCategory = await this.dictionaryService.getArticleCategoryById(article.articleCategoryId);
        const articleHashtags = await this.hashtagService.getHashtagsByArticleId(articleId);
        const articleRating = await this.articleRatingService.getRatingByArticleId(articleId);
        article.tags = articleHashtags;
        article.articleCategory = articleCategory;
        article.rating = articleRating;
        return article;
    }

    public async getAll(params: ArticleListQueryParams): Promise<ArticleReduced[]> {
        const categories = await this.dictionaryService.getAllArticleCategoriesAsMap();
        const articles = (await ArticleEntity.all({
            order: [['createdAt', 'DESC']],
            offset: params.skip,
            limit: params.take,
            attributes: ['id', 'title', 'description', 'createdAt', 'createdBy', 'articleCategoryId']
        })).map((item: any) => item.dataValues) as ArticleReduced[];

        for (let i = 0; i < articles.length; i++) {
            articles[i].articleCategory = categories[articles[i].articleCategoryId];
            articles[i].tags = await this.hashtagService.getHashtagsByArticleId(articles[i].id);
        }

        return articles;
    }
}