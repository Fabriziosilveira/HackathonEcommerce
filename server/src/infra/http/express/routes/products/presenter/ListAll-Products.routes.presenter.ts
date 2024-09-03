import { ListAllProductsOutputDto } from "../../../../../../application/useCase/product/dto/ListAll-Products.dto";
import { ListAllProductsResponseDto } from "../dto/ListAll-Products.routes.dto";

export function ListAllProductsRoutePresenter(input: ListAllProductsOutputDto): ListAllProductsResponseDto {
    const response: ListAllProductsResponseDto = {
        products: input.products.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            quantity: product.quantity,
            imageURL: product.imageURL
        })),
    };

    return response;
}