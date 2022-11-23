import {ValidationError} from "../utils/error";
import {ProductEntity} from "../types";

export const checkNameLength = (obj: ProductEntity) => {
    if(obj.name.length > 100) {
        throw new ValidationError('The length cannot has more than 100 characters!');
    }
}

export const checkIsName = (obj: ProductEntity) => {
    if(!obj.name) {
        throw new ValidationError('The name cannot be empty!');
    }
}

export const checkIsPrice = (obj: ProductEntity) => {
    if(!obj.price) {
        throw new ValidationError('Price is required!');
    }
}