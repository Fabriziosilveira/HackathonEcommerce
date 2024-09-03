export type ListAllProductsInputDto = void;

export type ListAllProductsOutputDto = {
    products:{ 
        id: string;
        name: string;
        price: number;
        description: string;
        quantity: number;
        imageURL: string;
    }[];
};
