import { Product } from "../../../domain/entities/Product.entity";
import { CreateProductOutputDto } from "../../useCase/product/dto/Create-Product.dto";

export function CreateProductPresenterOutput(product: Product): CreateProductOutputDto{
    const output: CreateProductOutputDto = {
        id: product.id,
    }
    
    return output;
}
