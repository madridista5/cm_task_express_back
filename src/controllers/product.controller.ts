import {NextFunction, Request, Response} from "express";
import {ProductRecord} from "../records/product.record";

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await ProductRecord.getAllProducts();
        res.status(200).send(products);
    } catch (err) {
        next(err);
    }
}

export const getOneProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await ProductRecord.getOneProductDetails(req.params.id);
        res.status(200).send(product);
    } catch (err) {
        next(err);
    }
}

export const addOneProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newProduct = new ProductRecord(req.body);
        const newProductWithId = await newProduct.insert();
        res.status(201).send(newProductWithId);
    } catch (err) {
        next(err);
    }
}

export const editOneProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productToEdit = await ProductRecord.getOneProductDetails(req.params.id);
        productToEdit.name = req.body.name;
        productToEdit.price = req.body.price;
        await ProductRecord.updateOneProduct(productToEdit);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
}

export const deleteOneProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await ProductRecord.deleteOneProduct(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
}