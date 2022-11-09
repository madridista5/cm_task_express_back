import {AllProductsResponse, ProductEntity} from "../types";
import {ValidationError} from "../utils/error";
import {v4 as uuid} from 'uuid';
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type ProductRecordResults = [ProductEntity[], FieldPacket[]];

export class ProductRecord implements ProductEntity {
    id?: string;
    name: string;
    price: number;
    updateDate: Date | null;

    constructor(obj: ProductEntity) {
        if(!obj.name || obj.name.length > 100) {
            throw new ValidationError('The name cannot be empty and the length cannot has more than 100 characters!');
        }

        if(!obj.price) {
            throw new ValidationError('Price is required!');
        }

        this.id = obj.id;
        this.name = obj.name;
        this.price = obj.price;
        this.updateDate = obj.updateDate ?? null;
    }

    async insert(): Promise<ProductEntity> {
        if(!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `products` VALUES (:id, :name, :price, :updateDate)", {
            id: this.id,
            name: this.name,
            price: this.price,
            updateDate: this.updateDate,
        });
        return this;
    };

    static async getAllProducts(): Promise<AllProductsResponse> {
        const [results] = await pool.execute("SELECT * FROM `products`") as ProductRecordResults;
        return results.map(product => new ProductRecord(product));
    }

    static async getOneProductDetails(id: string): Promise<ProductEntity | null> {
        const [results] = await pool.execute("SELECT * FROM `products` WHERE `id` = :id", {
            id,
        }) as ProductRecordResults;
        return results.length === 0 ? null : new ProductRecord(results[0]);
    }

    static async updateOneProduct(obj: ProductEntity): Promise<void> {
        if(!obj.id) {
            throw new ValidationError('Product id is required!');
        }
        await pool.execute("UPDATE `products` SET `name` = :name, `price` = :price, `updateDate` = :updateDate WHERE `products`.`id` = :id", {
            name: obj.name,
            price: obj.price,
            updateDate: new Date(),
            id: obj.id,
        });
    }

    static async deleteOneProduct(id: string): Promise<void> {
        await pool.execute("DELETE FROM `products` WHERE `id` = :id", {
            id,
        });
    }

}