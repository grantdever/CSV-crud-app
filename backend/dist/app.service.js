"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const pool = new pg_1.Pool({
    user: process.env.DB_USERNAME,
    host: 'db.bit.io',
    database: 'grantdever/csv-parser',
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: true,
});
const query_string = 'SELECT * FROM "addresses" limit 10;';
pool.query(query_string, (err, res) => {
    if (err) {
        throw err;
    }
    console.table(res.rows);
});
let AppService = class AppService {
    getHello() {
        return 'We got him!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map