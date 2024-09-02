export type CreateProductInputDto = {
    name: string;
    price: number;
    description: string;
    imageURL: string;
};

export type CreateProductOutputDto = {
    id: string;
};