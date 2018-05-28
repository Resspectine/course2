import Sequelize from 'sequelize';

export const sequelizeConnection = new Sequelize({
    dialect: 'mssql',
    database: 'LolNewsDB',
    username: 'lolnewsuser',
    password: 'lolnewspass',
    port: 1433,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    host: 'localhost',
    dialectOptions: {
        instanceName: 'MSSQLSERVER',
        requestTimeout: 30000
    },
    define: {
        timestamps: false
    }
});