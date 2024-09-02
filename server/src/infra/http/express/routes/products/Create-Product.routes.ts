import { Request, Response } from "express";
import { CreateProductUseCase } from "../../../../../application/useCase/product/Create-Product.useCase";
import { HttpMethod, Route } from "../routes";
import { CreateProductInputDto } from "../../../../../application/useCase/product/dto/Create-Product.dto";
import { CreateProductResponseDto } from "./dto/Create-Product.routes.dto";
import { CreateProductRoutePresenter } from "./presenter/Create-Product.routes.presenter";

export class CreateProductRoute implements Route{
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly createProductService: CreateProductUseCase,
    ){}

    public static create(createProductService: CreateProductUseCase){
        return new CreateProductRoute(
            '/products',
            HttpMethod.POST,
            createProductService
        );
    };

    public getHandler(){
        return async (request: Request, response: Response) => {
            const { name, price, description, imageURL } = request.body;

            const input: CreateProductInputDto = {
                name,
                price,
                description,
                imageURL,
            };

            const output: CreateProductResponseDto = 
            await this.createProductService.execute(input);

            const responseBody = CreateProductRoutePresenter(output);

            response.status(201).json(responseBody).send();
        };
    };

    public getPath(): string {
        return this.path;
    };

    public getMethod(): HttpMethod{
        return this.method;
    };
};