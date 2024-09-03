import { Product } from "../../../domain/entities/Product.entity";
import { ListAllProductsOutputDto } from "../../useCase/product/dto/ListAll-Products.dto";

export function ListAllProductsOutput(products: Product[]): ListAllProductsOutputDto{
    return {
        products: products.map((p) => {
            return {
                id: p.id,
                name: p.name,
                price: p.price,
                description: p.description,
                quantity: p.quantity,
                imageURL: p.imageURL
            }
        })
    };
}