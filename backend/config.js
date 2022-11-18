//config.js

import { config } from 'dotenv';
config();
export const db_username = process.env.DB_USERNAME;
export const db_password = process.env.DB_PASSWORD;
