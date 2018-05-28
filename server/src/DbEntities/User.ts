import Sequelize, { Model } from 'sequelize';
import { UserRoleEntity } from './UserRole';
import { sequelizeConnection } from '../Config/DBConnection';

function buildEntity(): Model<any, any> {

    const entity = sequelizeConnection.define('User', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        fullname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        confirmed: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        registeredAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        roleId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: UserRoleEntity,
                key: 'Id'
            }
        }
    }) as Model<any, any>;

    // entity.hasOne(UserRoleEntity);

    return entity;
}

export const UserEntity = buildEntity();