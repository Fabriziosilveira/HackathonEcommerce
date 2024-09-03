import { ProductGateway } from "../../../domain/gateway/Product.gateway";
import { ListAllProductsOutput } from "../../presenter/product/ListAll-Products.presenter";
import { UseCase } from "../UseCase.gateway";
import { ListAllProductsInputDto, ListAllProductsOutputDto } from "./dto/ListAll-Products.dto";

export class ListAllProductsUseCase 
    implements UseCase< ListAllProductsInputDto,ListAllProductsOutputDto>{

    private constructor(private readonly productGateway: ProductGateway){}

    public static create(productGateway: ProductGateway) {
        return new ListAllProductsUseCase(productGateway);
    };
    
    public async execute(): Promise<ListAllProductsOutputDto>{

        const allProducts = await this.productGateway.listAll();

        const output = ListAllProductsOutput(allProducts);

        return output;
    };
};