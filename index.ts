import cors from "cors";
import express from "express";
import 'express-async-errors';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());


app.listen(3001, '0.0.0.0',() => {
    console.log('Listening on http://localhost:3001');
});