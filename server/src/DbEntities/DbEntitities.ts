import { Container } from 'inversify';
import { sequelizeConnection } from '../Config/DBConnection';
import { ArticleEntity } from './Article';
import { ArticleCategoryEntity,  addDefault as addDefaultCategories } from './ArticleCategory';
import { ArticleRatingEntity } from './ArticleRatings';
import { HashtagEntity, addDefault as addDefaultHashtags } from './Hashtag';
import { UserEntity } from './User';
import { UserRoleEntity, addDefault as addDefaultUserRoles } from './UserRole';

export async function initModels(container: Container): Promise<any> {
    const forceFilesExecution = {
        ArticleEntity,
        ArticleCategoryEntity,
        ArticleRatingEntity,
        HashtagEntity,
        UserEntity,
        UserRoleEntity
    };
    await sequelizeConnection.sync({ logging: true, force: true });
    return Promise.all([
        addDefaultCategories(),
        addDefaultHashtags(),
        addDefaultUserRoles()
    ]);
}