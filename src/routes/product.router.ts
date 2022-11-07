import {Router} from "express";
import {
    addOneProduct,
    deleteOneProduct,
    editOneProduct,
    getAllProducts,
    getOneProduct
} from "../controllers/product.controller";

export const productRouter = Router();

productRouter
    .get('/allProducts', getAllProducts)
    .get('/oneProductDetails/:id', getOneProduct)
    .post('/add', addOneProduct)
    .put('/edit/:id', editOneProduct)
    .delete('/delete/:id', deleteOneProduct);