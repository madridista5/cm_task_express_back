export interface ProductEntity {
    id?: string,
    name: string,
    price: number,
}

export interface ProductEntityResponse extends ProductEntity {
    updateDate: Date | null;
}

export type AllProductsResponse = ProductEntityResponse[];