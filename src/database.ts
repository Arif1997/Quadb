import { Sequelize } from 'sequelize';
import { DatabaseConfig } from './interface';


import * as databaseConfigJson from './config/config.json';

const databaseConfig: DatabaseConfig = databaseConfigJson as DatabaseConfig;
const validEnvironments: ('development' | 'test' | 'production')[] = ['development', 'test', 'production'];

const environment: 'development' | 'test' | 'production' = (process.env.NODE_ENV as 'development' | 'test' | 'production' || 'development').toLowerCase() as 'development' | 'test' | 'production';

if (!validEnvironments.includes(environment)) {
  throw new Error(`Invalid environment: ${environment}`);
}

const config = databaseConfig[environment];
const connectionUri = `${config.dialect}://${config.username}:${config.password}@${config.host}/${config.database}`;
const sequelize = new Sequelize(connectionUri);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
})
.catch((error: any) => {
    console.error('Unable to connect to the database:', error);
});


export default sequelize;
