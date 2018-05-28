import { addDefault as addDefaultHashtags, HashtagEntity } from '../DbEntities/Hashtag';
import { ArticleRatingEntity } from '../DbEntities/ArticleRatings';
import { sequelizeConnection } from './DBConnection';
import { addDefault as addDefaultCategories, ArticleCategoryEntity } from '../DbEntities/ArticleCategory';
import { UserEntity } from '../DbEntities/User';
import { ArticleEntity } from '../DbEntities/Article';
import { addDefault as addDefaultUserRoles, UserRoleEntity } from '../DbEntities/UserRole';

export async function initModels(): Promise<any> {
    const forceFilesExecution = {
        ArticleEntity,
        ArticleCategoryEntity,
        ArticleRatingEntity,
        HashtagEntity,
        UserEntity,
        UserRoleEntity
    };
    try {
        await sequelizeConnection.sync({ logging: true, force: false });
    } catch (error) {
        console.log(error);
    }
    return Promise.all([
        addDefaultCategories(),
        addDefaultHashtags(),
        addDefaultUserRoles()
    ]);
}