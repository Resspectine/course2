import Sequelize, { Model } from 'sequelize';
import { sequelizeConnection } from '../Config/DBConnection';

function buildEntity(): Model<any, any> {

    const entity = sequelizeConnection.define('Hashtag', {
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

export const HashtagEntity = buildEntity();

export async function addDefault(): Promise<void> {
    const hashtags = [
        { id: '26b2f213-3264-4871-b32f-c9fec8a9dbc8', name: 'google' },
        { id: 'afd670bb-f70a-4dba-8063-d48d741661b1', name: 'medium' },
        { id: '64896e30-a297-4253-ae13-64ecf85c1e93', name: 'fpm' }
    ];
    for (let i = 0; i < hashtags.length; i++) {
        if (!await HashtagEntity.findById(hashtags[i].id)) {
            await HashtagEntity.create(hashtags[i], { logging: true });
        }
    }
}