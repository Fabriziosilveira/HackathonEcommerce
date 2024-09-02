import { CreateProductUseCase } from "./application/useCase/product/Create-Product.useCase";
import { prisma } from "./infra/database/prisma";
import 'dotenv/config'
import { CreateProductRoute } from "./infra/http/express/routes/products/Create-Product.routes";
import { ProductRepositoryPrisma } from "./infra/repositories/product/Product.repository.prisma";
import { ApiExpress } from "./infra/http/express/api.express";

function main() {

    const repository = ProductRepositoryPrisma.create(prisma);

    const createProductUseCase = CreateProductUseCase.create(repository);
    // definir o getall

    const createRoute = CreateProductRoute.create(createProductUseCase);
    // definir routas do getAll
    
    const port = process.env.PORT as string;

    const api = ApiExpress.create(
        [
            createRoute
        ]
    );
    api.start(parseInt(port));
}

main();