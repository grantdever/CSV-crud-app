"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'db.bit.io',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'grantdever/csv-parser',
    synchronize: true,
    logging: true,
    entities: ['src/**/*.entity{.ts,.js}'],
    subscribers: [],
    migrations: [],
});
dotenv.config();
//# sourceMappingURL=data-source.js.map