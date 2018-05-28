import { injectable } from 'inversify';
import { Article, ArticleServiceErrorCodes } from './article.models';
import { ArticleCategoryEntity } from '../DbEntities/ArticleCategory';
import { HashtagEntity } from '../DbEntities/Hashtag';
import { Hashtag } from '../Dictionaries/Dictionary.models';

export const ArticleValidatorToken = Symbol.for('ArticleValidator');

@injectable()
export class ArticleValidator {

    public constructor() {}

    public async validateArticle(article: Article): Promise<void> {
        if (!article.title) {
            throw new Error(ArticleServiceErrorCodes.TitleIsInvalid);
        }
        if (!article.description) {
            throw new Error(ArticleServiceErrorCodes.DescriptionIsInvalid);
        }
        if (!article.content) {
            throw new Error(ArticleServiceErrorCodes.ContentIsInvalid);
        }
        if (!(
            article.articleCategory.id &&
            await ArticleCategoryEntity.findById(article.articleCategory.id)
        )) {
            throw new Error(ArticleServiceErrorCodes.CategoryIsInvalid);
        }
        await this.validateTags(article.tags);
    }

    private async validateTags(tags: Hashtag[]): Promise<void> {
        if (tags && tags.length) {
            const allTags = await HashtagEntity.all({ logging: true }) as Hashtag[];
            tags.forEach((tag: Hashtag) => {
                if (!allTags.find(existingTag => tag.id === existingTag.id)) {
                    throw new Error(ArticleServiceErrorCodes.TagsAreInvalid);
                }
            });
        }
    }
}