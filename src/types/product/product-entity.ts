export interface ProductEntity {
    name: string,
    price: number,
}

export interface ProductEntityResponse extends ProductEntity {
    id: string,
    updateDate: Date | null;
}

export type AllProductsResponse = ProductEntityResponse[];