import Sequelize, { Model } from 'sequelize';
import { ArticleCategoryEntity } from './ArticleCategory';
import { sequelizeConnection } from '../Config/DBConnection';

function buildEntity(): Model<any, any> {

    try {
        const entity = sequelizeConnection.define('Article', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            createdBy: {
                type: Sequelize.STRING,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            articleCategoryId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: ArticleCategoryEntity,
                    key: 'Id'
                }
            }
        }) as Model<any, any>;

        // entity.belongsTo(ArticleCategoryEntity);
        // entity.hasMany(ArticleRatingEntity, { foreignKey: 'articleCategoryId' });
        // entity.hasMany(ArticleHashtagEntity, { foreignKey: 'articleId' });


        return entity;
    } catch (error) {
        console.log(error);
    }

}

export const ArticleEntity = buildEntity();