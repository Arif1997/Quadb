"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database")); // Import the Sequelize instance
const app = (0, express_1.default)();
// Define a route to test the database connection
app.get('/test-db-connection', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Test the database connection by querying a table (e.g., User)
        yield database_1.default.authenticate();
        res.status(200).json({ message: 'Database connection established successfully.' });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
        res.status(500).json({ error: 'Database connection failed.' });
    }
}));
// Define other routes and middleware as needed
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
