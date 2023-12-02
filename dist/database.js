"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Load the database configuration from config.json
const databaseConfigJson = __importStar(require("./config/config.json"));
// Cast the loaded JSON object to the expected type
const databaseConfig = databaseConfigJson;
// Define a list of valid environment values
const validEnvironments = ['development', 'test', 'production'];
// Determine the environment based on NODE_ENV
const environment = process.env.NODE_ENV.toLowerCase();
// Check if the environment is valid
if (!validEnvironments.includes(environment)) {
    throw new Error(`Invalid environment: ${environment}`);
}
const config = databaseConfig[environment];
const connectionUri = `${config.dialect}://${config.username}:${config.password}@${config.host}/${config.database}`;
// Create a Sequelize instance and pass the configuration options
const sequelize = new sequelize_1.Sequelize(connectionUri);
// Test the database connection
sequelize
    .authenticate()
    .then(() => {
    console.log('Database connection established successfully.');
    // Export the Sequelize instance
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});
exports.default = sequelize;
