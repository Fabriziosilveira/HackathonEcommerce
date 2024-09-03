export type ListAllProductsResponseDto = {
    products:{ 
        id: string;
        name: string;
        price: number;
        description: string;
        quantity: number;
        imageURL: string;
    }[];
};