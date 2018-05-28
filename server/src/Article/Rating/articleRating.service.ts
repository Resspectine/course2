import { injectable } from 'inversify';
import { ArticleRatingEntity } from '../../DbEntities/ArticleRatings';
import { ArticleRating } from './articleRating.models';

export const ArticleRatingServiceToken = Symbol.for('ArticleRatingService');

@injectable()
export class ArticleRatingService {

    public constructor() {}

    public async getRatingByArticleId(articleId: string): Promise<number> {
        const ratings = (await ArticleRatingEntity.findAll({
            where: { articleId: articleId }
        }) as any).map((item: any) => item.dataValues);
        const marks = ratings.map((rating: ArticleRating) => rating.rating);
        return marks.length ?
            marks.reduce((next: number, current: number) => current + next) / marks.length :
            -1;
    }
}