import { Request, Response } from "express";
import { ListAllProductsUseCase } from "../../../../../application/useCase/product/ListAll-Products.useCase";
import { HttpMethod, Route } from "../routes";
import { ListAllProductsRoutePresenter } from "./presenter/ListAll-Products.routes.presenter";

export class ListAllProductsRoute implements Route{
    private constructor(
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly listAllProductsService: ListAllProductsUseCase
    ){}

    public static create(listAllProductsService: ListAllProductsUseCase){
        return new ListAllProductsRoute(
            '/products',
            HttpMethod.GET,
            listAllProductsService
        );
    };

    public getHandler() {
        return async (request: Request, response: Response) => {

            const output = await this.listAllProductsService.execute();

            const responseBody = ListAllProductsRoutePresenter(output);

            response.status(200).json(responseBody).send();
        };
    };

    public getPath(): string {
        return this.path;
    };

    public getMethod(): HttpMethod {
       return this.method; 
    };
};