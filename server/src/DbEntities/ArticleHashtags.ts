import { sequelizeConnection } from '../Config/DBConnection';
import Sequelize, { Model } from 'sequelize';
import { ArticleEntity } from './Article';
import { HashtagEntity } from './Hashtag';

function buildEntity(): Model<any, any> {

    const entity = sequelizeConnection.define('ArticleHashtags', {
        articleId: {
            type: Sequelize.UUID,
            primaryKey: true,
            references: {
                model: ArticleEntity,
                key: 'Id'
            }
        },
        hashtagId: {
            type: Sequelize.UUID,
            primaryKey: true,
            references: {
                model: HashtagEntity,
                key: 'Id'
            }
        }
    }) as Model<any, any>;

    // entity.hasMany(ArticleEntity, { foreignKey: 'articleId' });
    // entity.hasMany(HashtagEntity, { foreignKey: 'hashtagId' });

    return entity;
}

export const ArticleHashtagEntity = buildEntity();