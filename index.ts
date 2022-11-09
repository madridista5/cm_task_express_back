import cors from "cors";
import express from "express";
import 'express-async-errors';
import {handleError} from "./src/utils/error";
import * as dotenv from 'dotenv';
import {productRouter} from "./src/routes/product.router";

const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.use('/api/product', productRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');
});