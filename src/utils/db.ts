import {createPool} from "mysql2/promise";
import * as dotenv from 'dotenv';
dotenv.config();

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    namedPlaceholders: true,
    decimalNumbers: true,
});