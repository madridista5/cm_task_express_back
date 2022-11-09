export interface ProductEntity {
    id?: string,
    name: string,
    price: number,
    updateDate: Date | null;
}

export type AllProductsResponse = ProductEntity[];