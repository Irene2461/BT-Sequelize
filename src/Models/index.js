import { Sequelize } from 'sequelize'
import config from '../Config/config.js';

const sequelize = new Sequelize(
    config.db_database,
    config.db_user,
    config.db_pass,
    {
        host: config.db_host, // 127.0.0.1
        dialect: config.db_dialect,
        port: config.db_port
    }
)

export default sequelize;