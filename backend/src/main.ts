import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

//imports dotenv
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

console.log(process.env.DB_USERNAME);

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: 'db.bit.io',
  database: 'grantdever/csv-parser', // public database 
  password: process.env.DB_PASSWORD, // key from bit.io database page connect menu
  port: 5432,
  ssl: true,
});

const query_string = 'SELECT * FROM "addresses" limit 10;'
pool.query(query_string, (err, res) => {
  if(err){ 
    throw err;
  }
  console.table(res.rows); // you could also just console.log, but console.table is neat :)
});


bootstrap();
