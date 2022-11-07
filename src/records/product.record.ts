import {ProductEntity, ProductEntityResponse} from "../types";
import {ValidationError} from "../utils/error";

export class ProductRecord implements ProductEntityResponse {
    id: string;
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
        this.updateDate = null;
    }
}