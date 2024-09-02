import { Product } from "../../../domain/entities/Product.entity";
import { ProductGateway } from "../../../domain/gateway/Product.gateway";
import { CreateProductPresenterOutput } from "../../presenter/product/CreateProduct.presenter";
import { UseCase } from "../UseCase.gateway"
import { CreateProductInputDto, CreateProductOutputDto } from "./dto/Create-Product.dto";

export class CreateProductUseCase 
    implements UseCase<CreateProductInputDto, CreateProductOutputDto>{

    private constructor(private readonly productGateway: ProductGateway){}

    public static create(productGateway: ProductGateway){
        return new CreateProductUseCase(productGateway)
    }

    public async execute({
        name, 
        price, 
        description, 
        imageURL
    }: CreateProductInputDto): Promise<CreateProductOutputDto>{
        const newProduct = Product.create(name, price, description, imageURL);

        await this.productGateway.create(newProduct);

        const output = CreateProductPresenterOutput(newProduct);
       
        return output;
    }
}