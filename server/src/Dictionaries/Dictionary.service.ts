import { ArticleCategory, Hashtag, UserRole } from './Dictionary.models';
import { ArticleCategoryEntity } from '../DbEntities/ArticleCategory';
import { HashtagEntity } from '../DbEntities/Hashtag';
import { UserRoleEntity } from '../DbEntities/UserRole';
import { injectable } from 'inversify';

export const DictionaryServiceToken = Symbol.for('DictionaryService');

@injectable()
export class DictionaryService {

    public constructor() {}

    public async getAllArticleCategories(): Promise<ArticleCategory[]> {
        return ArticleCategoryEntity.all({ order: [['name', 'ASC']] }) as any;
    }

    public async getAllArticleCategoriesAsMap(): Promise<any> {
        const categories = await ArticleCategoryEntity.all();
        const result = {};
        categories.forEach((category: ArticleCategory) =>
            Object.defineProperty(result, category.id, category));
        return result;
    }

    public async getAllHashtags(): Promise<Hashtag[]> {
        return HashtagEntity.all({ order: [['name', 'ASC']] }) as any;
    }

    public async getAllUserRoles(): Promise<UserRole[]> {
        return UserRoleEntity.all({ order: [['name', 'ASC']] }) as any;
    }

    public async getArticleCategoryById(categoryId: string): Promise<ArticleCategory> {
        return (await ArticleCategoryEntity.findById(categoryId)).dataValues as ArticleCategory;
    }
}