import { injectable } from 'inversify';
import { Hashtag } from '../../Dictionaries/Dictionary.models';
import { ArticleHashtagEntity } from '../../DbEntities/ArticleHashtags';
import { HashtagEntity } from '../../DbEntities/Hashtag';
import { ArticleHashtag } from './hashtag.models';

export const HashtagServiceToken = Symbol.for('HashtagService');

@injectable()
export class HashtagService {

    public constructor() {
    }

    public async addArticleTags(articleId: string, tags: Hashtag[]): Promise<ArticleHashtag[]> {
        const result = await ArticleHashtagEntity
            .bulkCreate(tags.map((tag: Hashtag) => {
                return {
                    articleId: articleId,
                    hashtagId: tag.id
                };
            }), { logging: true });
        return result;
    }

    public async getHashtagsByArticleId(articleId: string): Promise<Hashtag[]> {
        const tagIds = await this.getHashtagIds(articleId);
        return (await HashtagEntity.findAll({
            where: { id: { $in: tagIds } }
        }) as any).map((item: any) => item.dataValues);
    }

    public async getAllHashtagsAsMap(): Promise<any> {
        const arr: Hashtag[] = (await HashtagEntity.all()).map((item: any) => item.dataValues);
        const result: any = {};
        arr.forEach((item: Hashtag) => {
            result[item.id] = item;
        });
        return result;
    }

    public async getHashtagIds(articleId: string): Promise<string[]> {
        const articleHashtags = (await ArticleHashtagEntity
            .findAll({
                where: { articleId: articleId }
            }) as any).map((item: any) => item.dataValues) as ArticleHashtag[];
        const tagIds = articleHashtags.map((articleHashtag: ArticleHashtag) => articleHashtag.hashtagId);
        return tagIds;
    }
}