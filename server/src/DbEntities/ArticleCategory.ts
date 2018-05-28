import Sequelize, { Model } from 'sequelize';
import { sequelizeConnection } from '../Config/DBConnection';

function buildEntity(): Model<any, any> {

    const entity = sequelizeConnection.define('ArticleCategory', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }) as Model<any, any>;

    return entity;
}
export const ArticleCategoryEntity = buildEntity();

export async function addDefault(): Promise<void> {
    const categories = [
        { id: '77b3356d-bed2-41a0-ac7b-e4dc35096454', name: 'Money' },
        { id: 'c32c017f-a859-4c84-872c-5234cffda067', name: 'Sex' },
        { id: '7e4da113-2220-494d-8c10-8c59322c8e89', name: 'Bitches' }
    ];
    for (let i = 0; i < categories.length; i++) {
        if (!await ArticleCategoryEntity.findById(categories[i].id)) {
            await ArticleCategoryEntity.create(categories[i], { logging: true });
        }
    }
}