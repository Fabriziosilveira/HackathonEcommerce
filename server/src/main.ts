import { CreateProductUseCase } from "./application/useCase/product/Create-Product.useCase";
import { prisma } from "./infra/database/prisma";
import 'dotenv/config'
import { CreateProductRoute } from "./infra/http/express/routes/products/Create-Product.routes";
import { ProductRepositoryPrisma } from "./infra/repositories/product/Product.repository.prisma";
import { ApiExpress } from "./infra/http/express/api.express";
import { ListAllProductsUseCase } from "./application/useCase/product/ListAll-Products.useCase";
import { ListAllProductsRoute } from "./infra/http/express/routes/products/ListAll-Products.routes";

function main() {

    const repository = ProductRepositoryPrisma.create(prisma);

    const createProductUseCase = CreateProductUseCase.create(repository);
    const listAllProductsUseCase = ListAllProductsUseCase.create(repository);

    const createProductRoute = CreateProductRoute.create(createProductUseCase);
    const listAllProductRoute = ListAllProductsRoute.create(listAllProductsUseCase);
    
    const port = process.env.PORT as string;

    const api = ApiExpress.create(
        [
            createProductRoute,
            listAllProductRoute
        ]
    );
    api.start(parseInt(port));
}

main();