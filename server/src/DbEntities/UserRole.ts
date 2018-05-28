import Sequelize, { Model } from 'sequelize';
import { sequelizeConnection } from '../Config/DBConnection';

function buildEntity(): Model<any, any> {

    const entity = sequelizeConnection.define('UserRole', {
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

export const UserRoleEntity = buildEntity();

export async function addDefault(): Promise<void> {
    const userRoles = [
        { id: 'e6bf26dd-91ac-4bb0-afbf-ff4616229543', name: 'Admin' },
        { id: '5c2c285e-1215-401b-b4a5-f9273d7e50c4', name: 'Writer' },
        { id: '8abb6add-67e8-49f8-9a54-83e27e5a5185', name: 'Reader' }
    ];
    for (let i = 0; i < userRoles.length; i++) {
        if (!await UserRoleEntity.findById(userRoles[i].id)) {
            await UserRoleEntity.create(userRoles[i], { logging: true });
        }
    }
}