import { PrismaClient } from "@prisma/client";
import { Product } from "../../../domain/entities/Product.entity";
import { ProductGateway } from "../../../domain/gateway/Product.gateway";

export class ProductRepositoryPrisma implements ProductGateway {

    private constructor(private readonly prismaClient: PrismaClient){}

    public static create(prismaClient: PrismaClient){
        return new ProductRepositoryPrisma(prismaClient);
    }

    public async create(product: Product): Promise<void> {
        const data = {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            quantity: product.quantity,
            imageURL: product.imageURL
        };

        await this.prismaClient.product.create({data});
    };

    public async listAll(): Promise<Product[]> {
        const products = await this.prismaClient.product.findMany();

        const productList = products.map((p) => {
            const product = Product.with({
                id: p.id,
                name: p.name,
                price: p.price,
                description: p.description,
                quantity: p.quantity,
                imageURL: p.imageURL,
            });

            return product;
        });

        return productList;
    };  
};