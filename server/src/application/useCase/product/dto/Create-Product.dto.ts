export type CreateProductInputDto = {
    name: string;
    price: number;
    description: string;
};

export type CreateProductOutputDto = {
    id: string;
};