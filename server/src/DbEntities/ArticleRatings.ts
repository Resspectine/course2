import Sequelize, { Model } from 'sequelize';
import { ArticleEntity } from './Article';
import { sequelizeConnection } from '../Config/DBConnection';

function buildEntity(): Model<any, any> {

    const entity = sequelizeConnection.define('ArticleRatings', {
        articleId: {
            type: Sequelize.UUID,
            primaryKey: true,
            references: {
                model: ArticleEntity,
                key: 'Id'
            }
        },
        username: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        rating: {
            type: Sequelize.TINYINT,
            allowNull: false
        }
    }) as Model<any, any>;

    return entity;
}

export const ArticleRatingEntity = buildEntity();