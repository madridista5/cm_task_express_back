import {Router} from "express";

export const productRouter = Router();

productRouter
    .get('/allProducts')
    .get('/oneProductDetails')
    .post('/add')
    .put('/edit/:id')
    .delete('/delete/:id');